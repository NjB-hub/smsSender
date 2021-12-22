
import pkg from "faker";
const { name, internet, datatype, lorem, image , address, phone, company  } = pkg;
import _ from "lodash";
import { MongoClient } from "mongodb";


async function seedDB() {
    // Connection URL
    const uri = "mongodb://localhost:27017";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const userscollection = client.db("smsdb").collection("users");
        const messagescollection = client.db("smsdb").collection("messages");
        const contactscollection = client.db("smsdb").collection("contacts");
        
        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
       // collection.drop();

        // make a bunch of users
        let users = [];

        for (let i = 0; i < 15; i++) {
            
            let newUser = {
                firstName: name.firstName(),
                lastName: name.lastName(),
                phoneNumber: phone.phoneNumber(), 
                country: address.country(),
                password: internet.password(),
                photo: image.people(),   
                
            };
            users.push(newUser);
        }
        userscollection.insertMany(users);

        // make a bunch of profiles
        let contacts = [];

        for (let i = 0; i < 15; i++) {
            
            let newContact = {
                firstName: name.firstName(),
                lastName: name.lastName(),
                phoneNumber: phone.phoneNumber(),
                phoneOperator: company.companyName(),
                user_id: _.sample(users),
                creationDate: datatype.datetime(),         
            };
            contacts.push(newContact);
        }
        contactscollection.insertMany(contacts);

        // make a bunch of messages
        let messages = [];

        for (let i = 0; i < 15; i++) {
            
            let newMessage = {
                content: lorem.word(),
                user_id: _.sample(users),
                number: phone.phoneNumber(),
                creationDate: datatype.datetime(),
                isSent: datatype.boolean(),   
                connection_direction: datatype.boolean(),
            };
            messages.push(newMessage);
        }
        messagescollection.insertMany(messages);

        console.log("Database seeded! :)");
      //  client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();