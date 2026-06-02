package com.infrastrack.backend.tools;

import com.infrastrack.backend.dto.*;
import com.infrastrack.backend.services.BlueprintService;
import com.infrastrack.backend.services.FloorPlanService;
import com.infrastrack.backend.services.RenderedDesignService;
import com.infrastrack.backend.services.RoomLayoutService;
import dev.langchain4j.agent.tool.P;
import dev.langchain4j.agent.tool.Tool;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor

public class ConstructionTools {
    private final BlueprintService blueprintService;
    private final FloorPlanService floorPlanService;
    private final RenderedDesignService renderedDesignService;
    private final RoomLayoutService roomLayoutService;


    @Tool("""
            Retrieve project blueprints based on the customer's request.
            
            Behavior:
            - If the customer mentions or describes a specific blueprint
              (e.g. kitchen layout, second floor plan, electrical plan, bedroom design),
              return only the matching blueprint.
            - If the customer does not specify any particular blueprint,
              return all blueprints associated with the project.
            """)
    public ImageResponseDto getAllBlueprintsFromProject(
            @P("The project ID containing the blueprints")
            long projectId) {

        return ImageResponseDto.builder()
                .doesItReturnImage(true)
                .keysAndDescription(blueprintService.getAllBlueprintsFromProject(projectId))
                .build();

    }

    @Tool("""
            Retrieve floor plans for a given project.
            - If a customer specifies a particular floor plan, return only that plan.
            - Otherwise return all floor plans associated with the project.
            """)
    public ImageResponseDto getAllFloorPlansFromProject(
            @P("The project ID containing the floor plans")
            long projectId) {

        return ImageResponseDto.builder()
                .doesItReturnImage(true)
                .keysAndDescription(floorPlanService.getAllFloorPlansFromProject(projectId))
                .build();
    }

    @Tool("""
            Retrieve rendered designs for a given project.
            - If a customer specifies a particular rendered design, return only that design.
            - Otherwise return all rendered designs associated with the project.
            """)
    public ImageResponseDto getAllRenderedDesignsFromProject(
            @P("The project ID containing the rendered designs")
            long projectId) {

        return ImageResponseDto.builder()
                .doesItReturnImage(true)
                .keysAndDescription(renderedDesignService.getAllRenderedDesignsFromProject(projectId))
                .build();
    }

    @Tool("""
            Retrieve room layouts for a given project.
            - If a customer specifies a particular room layout, return only that layout.
            - Otherwise return all room layouts associated with the project.
            """)
    public ImageResponseDto getAllRoomLayoutsFromProject(
            @P("The project ID containing the room layouts")
            long projectId) {

        return ImageResponseDto.builder()
                .doesItReturnImage(true)
                .keysAndDescription(roomLayoutService.getAllRoomLayoutsFromProject(projectId))
                .build();
    }
}
