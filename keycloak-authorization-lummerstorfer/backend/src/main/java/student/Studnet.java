package student;

import io.quarkus.oidc.OidcConfigurationMetadata;
import io.quarkus.security.identity.SecurityIdentity;

import java.util.Map;

public class Studnet {

    private final String userName;

    Studnet(SecurityIdentity identity) {
        this.userName = identity.getPrincipal().getName();
        //identity.getAttributes().keySet().forEach(System.out::println);
        //identity.getCredentials().forEach(System.out::println);

    }

    public String getUserName() {
        return userName;
    }

    private void printIdentityAttributes(Map<String, Object> attributes) {
        System.out.println("Identity Attributes:");
        for (Map.Entry<String, Object> entry : attributes.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}