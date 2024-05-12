package com.thisiskartikgupta.videoHost.controllers;

import com.thisiskartikgupta.videoHost.service.VideoService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
import reactor.core.publisher.Mono;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/video/")
public class VideoController {

    @Autowired
    private VideoService videoService;


    @GetMapping(value= "/get/{fileName}", produces = "video/mp4")
    public Mono<Resource> getVideo(@PathVariable String fileName, @RequestHeader("Range") String range) {
        return videoService.getVideo(fileName);
    }
}
