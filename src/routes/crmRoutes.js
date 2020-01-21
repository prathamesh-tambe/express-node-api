import {addNewContact,getContacts} from '../controllers/crmController';

const routes = (app) =>{
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact);        
    
    app.route('/contact/:contactId')
        .put((req,res,next) => {
            console.log("This is middleware request");
            console.log(`Request from : ${req.originalUrl}`);
            console.log(`Request from : ${req.method}`);
            next();
        },(req,res,next) => {
            res.send(`contact put api working ${req.params.contactId}`);
        })

        .delete((req,res) => res.send(`contact delete api working ${req.params.contactId}`));        

} 

export default routes;