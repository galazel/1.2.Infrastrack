package com.infrastrack.backend.commons;

import com.infrastrack.backend.services.S3Service;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ServiceParent
{
    protected final S3Service s3Service;

}
