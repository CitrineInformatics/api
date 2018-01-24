# Citrination API Specification
[![Build Status](https://travis-ci.org/CitrineInformatics/api.svg?branch=master)](https://travis-ci.org/CitrineInformatics/api)

## Documentation

Documentation is available through either a [ReDoc](https://github.com/Rebilly/ReDoc) or [SwaggerUI](https://swagger.io/swagger-ui) interface. Three versions of the documentation are published:

### Master | [ReDoc](https://citrineinformatics.github.io/api) | [SwaggerUI](https://citrineinformatics.github.io/api/swagger-ui)

The API that is currently deployed to production Citrination environments. All client libraries that are publicly available have been generated from this API definition.

### Release | [ReDoc](https://citrineinformatics.github.io/api/preview/release) | [SwaggerUI](https://citrineinformatics.github.io/api/preview/release/swagger-ui)

The current release candidate of the API. All production Citrination environments should support this version of the API, though that support is not guaranteed.

### Develop | [ReDoc](https://citrineinformatics.github.io/api/preview/develop) | [SwaggerUI](https://citrineinformatics.github.io/api/preview/develop/swagger-ui)

The development branch of the API. There is no expectation that this version of the API is supported on any production environments.


## Updating to the specification

### Contributions

1. Update the `develop` branch with potential changes to the API
    1. Create a new branch off of `develop`
    2. Make changes to your new branch
    3. Open a pull request from your branch against `develop`
2. Update the `release` branch with a new release candidate
    1. Verify that the [development interfaces](#develop) are correct
    2. Wait until production Citrination instances support the changes to make
    3. Open a pull request from `develop` against `release`
3. Update the `master` branch with a new API version
    1. Verify that the [release interfaces](#release) are correct
    2. Update the API version on the `release` branch according to [conventions](#conventions)
    3. Open a pull request from `release` against `master`
4. Update `develop` with any changes
    1. In case any changes were made to the `release` branch, merge it back into `develop`

### Conventions

* Avoid breaking changes unless absolutely necessary
* Use semantic versioning for the API version number with the following meanings:
    * Revision: Changes to documentation or changes that otherwise do not affect behavior
    * Minor: Added functionality or schema elements
    * Major: Breaking changes
* Assume that client libraries will be auto-generated based on this documentation
    * Create directory structures that mirror package hierarchies
    * Make sure to support strongly-typed languages by defining both [type and format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#dataTypes) for variables
