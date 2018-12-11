import sum from './lib'
class Parent {
  public say(name: string) {
    console.log(`name is ${name}`)
  }
}
let p = new Parent()
p.say('jack')