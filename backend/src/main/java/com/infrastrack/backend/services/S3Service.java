package com.infrastrack.backend.services;

import com.infrastrack.backend.dto.BlueprintDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseInputStream;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class S3Service {

    @Value("${aws.s3.bucket-name}")
    private String bucketName;
    private final S3Client s3Client;


    public List<String> upload(List<MultipartFile> files, String folderName, long projectId) throws IOException {
        List<String> keys = new ArrayList<>();

        for (MultipartFile file : files) {
            String key = projectId + "-" + file.getOriginalFilename();

            key = switch (folderName.toLowerCase()) {

                case "blueprints" -> "blueprints/" + key;
                case "floor-plans" -> "floor-plans/" + key;
                case "rendered-designs" -> "rendered-designs/" + key;
                case "room-layouts" -> "room-layouts/" + key;

                default -> "misc/" + key;
            };

            s3Client.putObject(
                    PutObjectRequest.builder()
                            .bucket(bucketName)
                            .key(key)
                            .contentType(file.getContentType())
                            .build(),
                    RequestBody.fromBytes(file.getBytes())
            );
            keys.add(key);
        }
        return keys;
    }

    public String upload(MultipartFile file, String folderName, long projectId) throws IOException {
        String key;

        if(projectId == 0)
            key = System.currentTimeMillis() + "-" + file.getOriginalFilename();
        else
            key = projectId + "-" + file.getOriginalFilename();

        key = switch (folderName.toLowerCase()) {

            case "profiles" -> "profiles/" + key;
            case "reports" -> "reports/" + key;
            default -> "misc/" + key;
        };

        s3Client.putObject(
                PutObjectRequest.builder()
                        .bucket(bucketName)
                        .key(key)
                        .contentType(file.getContentType())
                        .build(),
                RequestBody.fromBytes(file.getBytes())
        );
        return key;
    }

    public ResponseInputStream<GetObjectResponse> getFileStream(String key) {

        return s3Client.getObject(
                GetObjectRequest.builder()
                        .bucket(bucketName)
                        .key(key)
                        .build()
        );
    }
}