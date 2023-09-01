const { Player, Profile, Team } = require('../models');

// TODO: 컨트롤러

exports.index = (req, res) => {
  res.render('index');
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const player = await Player.findOne({
      where: { player_id: player_id },
    });
    res.send(player);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
    });
    res.send(newPlayer);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatedPlayer = await Player.update(
      { team_id: team_id },
      {
        where: {
          player_id: player_id,
        },
      }
    );

    res.send(updatedPlayer); // 성공시 [1], 실패시 [0]
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({
      where: { player_id: player_id },
    });

    // console.log(isDeleted); // 성공시 1, 실패시 0
    if (isDeleted) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.findAll({
      attributes: ['team_id', 'name'],
    });
    res.send(teams);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};
