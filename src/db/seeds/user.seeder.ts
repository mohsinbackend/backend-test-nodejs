import * as bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../../users/entities/user.entity';



export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        //factoryManager: SeederFactoryManager
    ): Promise<any> {
        const userRepository =  dataSource.getRepository(User); 

        await userRepository.upsert([
            {name: 'User1',email: 'user1@gmail.com',password: await bcrypt.hash("1234567",10)},
            {name: 'User2',email: 'user2@gmail.com',password: await bcrypt.hash("1234567",10)},
            {name: 'User3',email: 'user3@gmail.com',password: await bcrypt.hash("1234567",10)},
        ], ['email']);

        // ---------------------------------------------------
        //const userFactory = await factoryManager.get(User);
        // save 1 factory generated entity, to the database
        //await userFactory.save();

        // save 5 factory generated entities, to the database
        //await userFactory.saveMany(5);
    }
}