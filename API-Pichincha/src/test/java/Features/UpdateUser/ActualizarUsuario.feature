# Poner nombre al Feature
Feature: Actualizar Usuario

# Especificar configuraciones iniciales
  Background:
    # Especificar url seteada en karate-config.js
    Given url urlDemo
    * configure headers = { Accept: 'application/json', Content-Type: 'application/json' }
    # Obtener la data
    * def body = read('classpath:Features/UpdateUser/Data/User.json')
    # Inicializar función de generación de datos
    * def dataGenerator = Java.type('util.DataGenerator')

#Flujo de actualizar Usuario
  @ActualizarUser
  Scenario: Actualizar usuario
    Given path 'user', body.username
    # Poner los valores creados en la función de dataGenerator
    * set body.firstName = dataGenerator.generarNombre()
    * set body.email = dataGenerator.generarEmail()
    And request body
    When method put
    Then status 200
    # Validar el código que se encuentra en el response
    And match response.code == 200

# Flujo de Buscar usuario actualizado
  @ActualizarUser
  Scenario: Buscar usuario actualizado
    Given path 'user', body.username
    When method get
    Then status 200
    # Validar el username del response
    And match response.username == body.username