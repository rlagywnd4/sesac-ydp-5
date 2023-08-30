//const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // Visitor.getVisitors((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  // [after]
  const result = await Visitor.findAll();
  console.log('result = ', result);
  res.render('visitor', { data: result });
};

//create
exports.postVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);
  // const { name, comment } = req.body;
  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >> ', insertId);
  //   res.send({ id: insertId, name: name, comment: comment });
  // });

  // [after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  // console.log('Cvisitor postVisitor result = ', result); //create메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result);
};

// delete
exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);
  // const { id } = req.body;

  // Visitor.deleteVisitor(id, (result) => {
  //   console.log('controller >>', result); // true
  //   res.send(result); // res.send(true)
  // });

  // [after]
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  //console.log('Cvisitor deleteVisitor result = ', result);
  res.send(true);
};

// read one
exports.getVisitor = async (req, res) => {
  // [before]
  //console.log(req.query);
  // console.log(req.params);
  // const { id } = req.params;

  // Visitor.getVisitor(id, (result) => {
  //   // result: 모델의 getVisitor callback의 인자(rows[0])
  //   console.log(result);
  //   res.send(result);
  // });

  // [after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log('Cvisitor getVisitor result = ', result);
  res.send(result);
};

exports.updateVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);

  // Visitor.updateVisitor(req.body, (result) => {
  //   console.log(result);
  //   res.send({ isUpdated: true });
  // });
  // [after]
  // update(변경될 값, where 절)
  const result = await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: { id: req.body.id },
    }
  );
  console.log('Cvisitor updateVisitor result = ', result);
  res.send({ isUpdated: true });
};
