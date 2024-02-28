package teacher;

import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import io.quarkus.security.Authenticated;

@Path("/api/teachers")
@Authenticated
public class TeacherResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String teachers() {
        return "granted";
    }
}
