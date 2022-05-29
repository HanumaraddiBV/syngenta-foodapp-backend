const _ = require("lodash");

const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    return res.status(201).send(item);
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    return res.status(200).send(items);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

const getDatails = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    var response = [];
    // console.log(req.query);

    if (
      typeof req.query.location != "undefined" &&
      typeof req.query.restaurant_name != "undefined"
    ) {
      items.filter(function (model) {
        console.log("model:", model);

        if (
          model.restaurant_name === req.query.restaurant_name &&
          model.location === req.query.location
        ) {
          console.log("model:", model);

          response.push(model);
        }
      });
    }

    response = _.uniqBy(response, "id");
    return res.status(201).send(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};


const getDataLocation = (model) => async (req, res) => {
    try {
      const items = await model.find().lean().exec();
      var response = [];
      // console.log(req.query);
  
      if (typeof req.query.location != "undefined") {
        items.filter(function (model) {
          // console.log('model:', model)
  
          if (model.location === req.query.location) {
            // console.log("model:", model);
  
            response.push(model);
          }
        });
      }
  
      response = _.uniqBy(response, "id");
      return res.status(201).send(response);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };

const getStatus = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    var response = "";
    if (typeof req.query.dish_name != "undefined") {
      items.filter(function (model) {
        // console.log('model:', model)

        if (model.dish_name == req.query.dish_name) {
          response = model.status;
        }
      });
    }
    // response = _.uniqBy(response, "id");
    return res.status(201).send(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};



const getRestaurant = (model) => async (req, res) => {
    try {
      const items = await model.find().lean().exec();
      var response = [];
      // console.log(req.query);
  
      if (typeof req.query.restaurant_name != "undefined") {
        items.filter(function (model) {
          // console.log('model:', model)
  
          if (model.restaurant_name === req.query.restaurant_name) {
            // console.log("model:", model);
  
            response.push(model);
          }
        });
      }
  
      response = _.uniqBy(response, "id");
      return res.status(201).send(response);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };






module.exports = (model) => ({
  post: post(model),
  get: getAll(model),
  getDatails: getDatails(model),
  getStatus: getStatus(model),
  getDataLocation: getDataLocation(model),
  getRestaurant:getRestaurant(model)
});
