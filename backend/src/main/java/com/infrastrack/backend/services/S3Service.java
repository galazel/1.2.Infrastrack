package com.infrastrack.backend.services;

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

@Service
public class S3Service {

    @Value("${aws.s3.bucket-name}")
    private String bucketName;

    private final S3Client s3Client;

    public S3Service(S3Client s3Client) {
        this.s3Client = s3Client;
    }

    
    public String upload(MultipartFile file, String folderName, int projectId) throws IOException {

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