package com.infrastrack.backend.services;


import dev.langchain4j.data.document.Document;
import dev.langchain4j.data.document.DocumentSplitter;
import dev.langchain4j.data.document.Metadata;
import dev.langchain4j.data.document.parser.apache.pdfbox.ApachePdfBoxDocumentParser;
import dev.langchain4j.data.document.parser.apache.poi.ApachePoiDocumentParser;
import dev.langchain4j.data.document.splitter.DocumentSplitters;
import dev.langchain4j.data.segment.TextSegment;
import dev.langchain4j.model.embedding.EmbeddingModel;
import dev.langchain4j.store.embedding.EmbeddingStore;
import dev.langchain4j.store.embedding.EmbeddingStoreIngestor;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;

@Service
@AllArgsConstructor
@Slf4j
public class IngestionService {

    private final EmbeddingModel embeddingModel;
    private final EmbeddingStore<TextSegment> embeddingStore;

    public void ingest(MultipartFile file, long projectId) {
        try {
            Path tempFile = Files.createTempFile("ingest-", file.getOriginalFilename());
            file.transferTo(tempFile);

            String fileName = Objects.requireNonNull(file.getOriginalFilename()).toLowerCase();

            Document document;

            if (fileName.endsWith(".pdf")) {
                document = new ApachePdfBoxDocumentParser()
                        .parse(Files.newInputStream(tempFile));
            } else {
                document = new ApachePoiDocumentParser()
                        .parse(Files.newInputStream(tempFile));
            }

            DocumentSplitter splitter = DocumentSplitters.recursive(500, 50);
            EmbeddingStoreIngestor ingestor = EmbeddingStoreIngestor.builder()
                    .documentSplitter(splitter)
                    .embeddingStore(embeddingStore)
                    .embeddingModel(embeddingModel)
                    .textSegmentTransformer(segment ->
                            TextSegment.from(
                                    segment.text(),
                                    new Metadata().put("projectId", projectId)
                            )
                    )
                    .build();
            ingestor.ingest(document);

        } catch (Exception e) {
            log.warn("Ingestion Service Failed", e);
        }
    }


}
