var Costume = require('../models/costume');

exports.costume_list = async function(req, res) {
  try {
    theCostumes = await Costume.find();
    res.send(theCostumes);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

exports.costume_view_all_Page = async function(req, res) {
  try {
    const theCostumes = await Costume.find();
    res.render('costumes', {
      title: 'Costume Search Results',
      results: theCostumes
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

exports.costume_detail = async function(req, res) {
  console.log("detail " + req.params.id);

  try {
    let result = await Costume.findById(req.params.id);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found}`);
  }
};

exports.costume_create_post = async function(req, res) {
  console.log(req.body);

  let document = new Costume();

  document.costume_type = req.body.costume_type;
  document.cost = req.body.cost;
  document.size = req.body.size;

  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

exports.costume_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

exports.costume_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Costume update PUT ' + req.params.id);
};