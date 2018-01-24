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

1. Create a new branch
    - Branch off of `develop`
    - Make changes on your new branch
    - Open a PR against `develop` with your changes
2. Once `develop` contains your changes
    - Verify the UI that is now available on [Develop](#develop) interfaces
    - Once the API is supported in production environments, open a PR against `release`
3. Once `release` contains your changes
    - Verify the UI that is now available on [Release](#release) interfaces
    - Bump the version of the API according to the [Conventions](#conventions) for this package
    - Open a PR against `master`
4. Once `master` contains your changes
    - Merge `release` back into `develop`
    - The UI is now available on [Master](#master) interfaces

### Conventions

* Avoid breaking changes unless absolutely necessary
* Use semantic versioning for the API version number with the following meanings:
    * Revision: Changes to documentation or changes that otherwise do not affect behavior
    * Minor: Added functionality or schema elements
    * Major: Breaking changes
* Assume that client libraries will be auto-generated based on this documentation
    * Create directory structures that mirror package hierarchies
    * Make sure to support strongly-typed languages by defining both [type and format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#dataTypes) for variables
