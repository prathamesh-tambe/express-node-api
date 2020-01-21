import {addNewContact,getContacts,getContactsWithId,updateContact,deleteContact} from '../controllers/crmController';

const routes = (app) =>{
    app.route('/contact')
        .get(getContacts)
        .post(addNewContact);        
    
    app.route('/contact/:contactId')
        .get(getContactsWithId)
        .put((req,res,next) => {
            console.log("This is middleware request");
            console.log(`Request from : ${req.originalUrl}`);
            console.log(`Request from : ${req.method}`);
            next();
        },updateContact)

        .delete(deleteContact);        

} 

export default routes;