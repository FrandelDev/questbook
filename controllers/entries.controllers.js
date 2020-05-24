const entries = [];
const renderIndex = (req,res)=>{
    res.render('index.ejs',{entries});
}
const renderNewEntry = (req,res)=>{
    res.render('new-entry')
}
const createNewEntry = (req,res)=>{
    const newEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    };
    res.redirect('/');
    entries.push(newEntry);
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry
}