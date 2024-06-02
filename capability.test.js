import { expect, test } from "bun:test";

let baseUrl = "https://niquola02.edge.aidbox.app/fhir"

function url(...args){
  return baseUrl + '/' + args.join('/');
}

test("capability statement", async () => {

  console.log(url('metadata'))
  const response = await fetch(url("metadata"));

  let body = await response.json();

  // console.log(JSON.stringify(body))

  expect(body.resourceType).toEqual("CapabilityStatement");

  // resource.identifier.where({system: 'ups'}).value
  // get(resource, 'identifier', {system: 'ups'}, 'value')

});


// export test = asunc ({url, fetch, match})=>{
// }
