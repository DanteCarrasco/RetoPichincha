package util;
import com.github.javafaker.Faker;

public class DataGenerator {

    public static String generarNombre() {
        Faker faker = new Faker();
        String nombre = faker.name().firstName();
        return nombre;
    }

    public static String generarApellido() {
        Faker faker = new Faker();
        String apellido = faker.name().lastName();
        return apellido;
    }

    public static String generarEmail() {
        Faker faker = new Faker();
        String email = faker.color().name() + faker.number().digits(3) + "@gmail.com";
        return email;
    }

    public static String generarPassword() {
        Faker faker = new Faker();
        String password = faker.name().name() + faker.number().digits(2);
        return password;
    }

}
