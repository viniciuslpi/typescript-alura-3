export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)
        const getter = function(){
            const elemento = document.querySelector(seletor);
            console.log(`Buscando elemento do dom com o seletor ${seletor} parar injetar ${propertyKey}`)
            return elemento;
        }
        Object.defineProperty(target, propertyKey, { get: getter })
    }
}