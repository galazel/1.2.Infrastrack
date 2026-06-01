package com.infrastrack.backend.services;

import dev.langchain4j.service.MemoryId;
import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import dev.langchain4j.service.V;
import dev.langchain4j.service.spring.AiService;

@AiService
public interface AIContractorService {
    @SystemMessage("You are a friendly contractor bot helping {{clientName}} with construction-related questions only. Do not respond to topics unrelated to construction.")
    public String chat(@MemoryId int userId, @V("clientName") String clientName, @UserMessage String request);
}
