var messages = [];
var id = 0;

module.exports = {
    read: ( req, res ) => {
        res.status(200).send(messages);
    }
    ,
    create: ( req, res ) => {
        let { text, time } = req.body;
        let messageToAdd= {
            id    : id,
            text  : text,
            time  : time
            
        };
        messages.push(messageToAdd);
        id++;
        res.status(200).send(messages);
    }
    ,
    update: ( req, res ) => {
        let { id } = req.params;
        id = Number(id);
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === id) {
                messages[i] = req.body;
                messages[i].id = id;
                res.status(200).send(messages);
            }
        }
    }
    ,
    delete: ( req, res ) => {
        let { id } = req.params;
        id = Number(id);
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === id) {
                messages.splice(i, 1);
            }
            
        }
        res.status(200).send(messages);
    } 
    
}