
export const paramMissingError = 'One or more of the required parameters was missing.'
export const wrongParamsError = 'The parameters sent to be assigned to the resource are wrong.'
export const internalServerError = 'Internal error. Please try again later.'
export const notFoundError = 'Requested resource was not found.'
export const alreadyExists = 'The resource that you tried to post already exists.'
export const created = 'The resource was sucessfully created.'
export const updated = 'The resource was sucessfully updated.'
export const deleted = 'The resource was sucessfully deleted.'

export const semVerRegExp = new RegExp(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/)

export const alphabetsArray = Array.from(Array(26)).map((_e, i) => i + 65).map((x) => String.fromCharCode(x));
