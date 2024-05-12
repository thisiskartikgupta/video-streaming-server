package com.thisiskartikgupta.videoHost.service;

import org.springframework.core.io.FileSystemResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class VideoServiceImpl implements  VideoService {

    private final String VIDEO_BASE_PATH = "D:/videoHost/%s";

    @Override
    public Mono<Resource> getVideo(String fileName) {
        FileSystemResourceLoader resourceLoader = new FileSystemResourceLoader();
        String filePath = String.format(VIDEO_BASE_PATH, fileName);
        System.out.println("File Path: " + filePath); // Debugging
        return Mono.fromSupplier(() -> resourceLoader.getResource(filePath));
    }
}

