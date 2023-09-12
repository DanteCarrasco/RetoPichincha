package Runner;

import com.intuit.karate.junit5.Karate;


public class UpdateRunner {

    @Karate.Test
    Karate testSample() {
        // Especificar ruta del feature
        return Karate.run("classpath:Features/UpdateUser/ActualizarUsuario.feature")
                // Especificar ambiente del archivo karate-config.js
                .karateEnv("cert")
                // Especificar tags de los Scenarios
                .tags("@ActualizarUser");
    }
}
