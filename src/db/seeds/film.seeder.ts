import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Film } from 'src/films/entities/film.entity';


export default class FilmSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        //factoryManager: SeederFactoryManager
    ): Promise<any> {
        const filmRepository =  dataSource.getRepository(Film); 

        await filmRepository.upsert([
            {
                id:1,
                rating:8.6,
                country:"USA",
                genre:"Thriller",
                name: 'Oppenheimer',
                ticket_price:100.50,
                release_date:"2023-08-21",
                description:"The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb."
            },
            {
                id:2,
                rating:7.6,
                country:"USA",
                genre:"Drama",
                name: 'Barbie',
                ticket_price:70.50,
                release_date:"2023-09-21",
                description:"Barbie suffers a crisis that leads her to question her world and her existence."
            },
            {
                id:3,
                rating:8.0,
                country:"USA",
                genre:"Science Fiction",
                name: 'Guardians of the Galaxy',
                ticket_price:110.50,
                release_date:"2023-09-30",
                description:"Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful."
            },
            {
                id:4,
                rating:5.5,
                country:"USA",
                genre:"Action",
                name: 'Meg 2: The Trench',
                ticket_price:75.50,
                release_date:"2023-08-04",
                description:"A research team encounters multiple threats while exploring the depths of the ocean, including a malevolent mining operation."
            },
            {
                id:5,
                rating:7.6,
                country:"USA",
                genre:"Action",
                name: 'Teenage Mutant Ninja Turtles',
                ticket_price:90.50,
                release_date:"2023-08-02",
                description:"The film follows the Turtle brothers as they work to earn the love of New York City while facing down an army of mutants."
            },
            {
                id:6,
                rating:5.7,
                country:"USA",
                genre:"Thriller",
                name: 'Heart of Stone',
                ticket_price:99.50,
                release_date:"2023-08-02",
                description:"An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable and dangerous weapon."
            },
            {
                id:7,
                rating:8.8,
                country:"USA",
                genre:"Animation",
                name:'Spider-Man: Across the Spider-Verse',
                ticket_price:99.50,
                release_date:"2023-06-02",
                description:"Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."
            },
            {
                id:8,
                rating:7.3,
                country:"USA",
                genre:"Comedy",
                name:'Red, White & Royal Blue',
                ticket_price:50.50,
                release_date:"2023-07-07",
                description:"When the feud between the son of the American President and Britain's prince threatens to drive a wedge in U.S./British relations, the two are forced into a staged truce that sparks something deeper."
            },
            {
                id:9,
                rating:6.5,
                country:"USA",
                genre:"Comedy",
                name:'No Hard Feelings',
                ticket_price:60.50,
                release_date:"2023-09-12",
                description:"On the brink of losing her home, Maddie finds an intriguing job listing: helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell before college. She has one summer to make him a man or die trying."
            },
            
            {
                id:10,
                rating:8.0,
                country:"USA",
                genre:"Action",
                name:'Mission: Impossible - Dead Reckoning Part One',
                ticket_price:150.50,
                release_date:"2023-12-30",
                description:"Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands."
            },
        ], ['id']);

        // ---------------------------------------------------
        //const userFactory = await factoryManager.get(User);
        // save 1 factory generated entity, to the database
        //await userFactory.save();

        // save 5 factory generated entities, to the database
        //await userFactory.saveMany(5);
    }
}