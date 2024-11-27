test("teste com função nomeada ", funcaoNomeada)

function funcaoNomeada() {
  console.log("foi?")
}

test("teste com função anonima", function() {
  console.log("aqui com a função anonima")
})

test("teste com arrow function", ()=> {
  console.log("aqui foi com arrow function")
})

test("teste com expected", ()=> {
  expect(2).toBe(2)
})