import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDbService implements InMemoryDbService{
    createDb(){
        const categories = [
            { id: 1 , name: "Lazer", description: 'Plano de Saúde e Remédios'}
        ];

        return { categories}
    }
}