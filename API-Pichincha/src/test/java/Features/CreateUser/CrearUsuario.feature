# Poner nombre al Feature
Feature: Crear nuevo usuario y buscarlo

# Especificar configuraciones iniciales
  Background:
    # Especificar url seteada en karate-config.js
    Given url urlDemo
    * configure headers = { Accept: 'application/json', Content-Type: 'application/json' }
    # Obtener la data
    * def body = read('classpath:Features/CreateUser/Data/User.json')
    # Inicializar función de generación de datos
    * def dataGenerator = Java.type('util.DataGenerator')

#Flujo de crear usuario
  @CrearUser
  Scenario Outline: Crear nuevo usuario
    Given path 'user'
    # Poner los valores creados en la función de dataGenerator
    * set body.firstName = dataGenerator.generarNombre()
    * set body.lastName = dataGenerator.generarApellido()
    * set body.email = dataGenerator.generarEmail()
    * set body.password = dataGenerator.generarPassword()
    # Poner el valor de la tabla Examples
    * set body.phone = "<celular>"
    And request body
    When method post
    Then status 200
    # Validar el código que se encuentra en el response
    And match response.code == 200

    Examples:
    | celular   |
    | 912384261 |

#Flujo de buscar usuario creado
  @CrearUser
  Scenario: Buscar usuario creado
    Given path 'user', body.username
    When method get
    Then status 200
    # Validar el username del response
    And match response.username == body.username