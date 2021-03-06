module.exports = async (message) => {
  if (!message) throw new TypeError("Weky Error: Missing argument message");
  const MessageButton = require("../struct/MessageButton");
  function i(length) {
    var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
  let str = " ";
  let stringify = "```\n" + str + "\n```";
  let calculator_ac = i(20);
  let calculator_e1 = i(20);
  let calculator_e2 = i(20);
  let calculator_uppercase = i(20);
  let calculator_7 = i(20);
  let calculator_8 = i(20);
  let calculator_9 = i(20);
  let calculator_plus = i(20);
  let calculator_minus = i(20);
  let calculator_star = i(20);
  let calculator_devide = i(20);
  let calculator_1 = i(20);
  let calculator_2 = i(20);
  let calculator_3 = i(20);
  let calculator_4 = i(20);
  let calculator_5 = i(20);
  let calculator_0 = i(20);
  let calculator_6 = i(20);
  let calculator_dot = i(20);
  let calculator_equal = i(20);
  let ac = new MessageButton()
    .setLabel("AC")
    .setCustomId(calculator_ac)
    .setStyle("red");
  let e1 = new MessageButton()
    .setLabel("(")
    .setCustomId(calculator_e1)
    .setStyle("blurple");
  let e2 = new MessageButton()
    .setLabel(")")
    .setCustomId(calculator_e2)
    .setStyle("blurple");
  let uppercase = new MessageButton()
    .setLabel("^")
    .setCustomId(calculator_uppercase)
    .setStyle("blurple");
  let seven = new MessageButton()
    .setLabel("7️")
    .setCustomId(calculator_7)
    .setStyle("gray");
  let eight = new MessageButton()
    .setLabel("8️")
    .setCustomId(calculator_8)
    .setStyle("gray");
  let nine = new MessageButton()
    .setLabel("9️")
    .setCustomId(calculator_9)
    .setStyle("gray");
  let slash = new MessageButton()
    .setLabel("/")
    .setCustomId(calculator_devide)
    .setStyle("blurple");
  let four = new MessageButton()
    .setLabel("4️")
    .setCustomId(calculator_4)
    .setStyle("gray");
  let five = new MessageButton()
    .setLabel("5️")
    .setCustomId(calculator_5)
    .setStyle("gray");
  let six = new MessageButton()
    .setLabel("6️")
    .setCustomId(calculator_6)
    .setStyle("gray");
  let star = new MessageButton()
    .setLabel("*")
    .setCustomId(calculator_star)
    .setStyle("blurple");
  let one = new MessageButton()
    .setLabel("1️")
    .setCustomId(calculator_1)
    .setStyle("gray");
  let two = new MessageButton()
    .setLabel("2️")
    .setCustomId(calculator_2)
    .setStyle("gray");
  let three = new MessageButton()
    .setLabel("3️")
    .setCustomId(calculator_3)
    .setStyle("gray");
  let minus = new MessageButton()
    .setLabel("-")
    .setCustomId(calculator_minus)
    .setStyle("blurple");
  let zero = new MessageButton()
    .setLabel("0️")
    .setCustomId(calculator_0)
    .setStyle("gray");
  let dot = new MessageButton()
    .setLabel(".")
    .setCustomId(calculator_dot)
    .setStyle("blurple");
  let equal = new MessageButton()
    .setLabel("=")
    .setCustomId(calculator_equal)
    .setStyle("green");
  let plus = new MessageButton()
    .setLabel("+")
    .setCustomId(calculator_plus)
    .setStyle("blurple");
  //Lock
  let qac = new MessageButton()
    .setLabel("AC")
    .setCustomId(calculator_ac)
    .setStyle("red")
    .setDisabled();
  let qe1 = new MessageButton()
    .setLabel("(")
    .setCustomId(calculator_e1)
    .setStyle("blurple")
    .setDisabled();
  let qe2 = new MessageButton()
    .setLabel(")")
    .setCustomId(calculator_e2)
    .setStyle("blurple")
    .setDisabled();
  let quppercase = new MessageButton()
    .setLabel("^")
    .setCustomId(calculator_uppercase)
    .setStyle("blurple")
    .setDisabled();
  let qseven = new MessageButton()
    .setLabel("7️")
    .setCustomId(calculator_7)
    .setStyle("gray")
    .setDisabled();
  let qeight = new MessageButton()
    .setLabel("8️")
    .setCustomId(calculator_8)
    .setStyle("gray")
    .setDisabled();
  let qnine = new MessageButton()
    .setLabel("9️")
    .setCustomId(calculator_9)
    .setStyle("gray")
    .setDisabled();
  let qslash = new MessageButton()
    .setLabel("/")
    .setCustomId(calculator_devide)
    .setStyle("blurple")
    .setDisabled();
  let qfour = new MessageButton()
    .setLabel("4️")
    .setCustomId(calculator_4)
    .setStyle("gray")
    .setDisabled();
  let qfive = new MessageButton()
    .setLabel("5️")
    .setCustomId(calculator_5)
    .setStyle("gray")
    .setDisabled();
  let qsix = new MessageButton()
    .setLabel("6️")
    .setCustomId(calculator_6)
    .setStyle("gray")
    .setDisabled();
  let qstar = new MessageButton()
    .setLabel("*")
    .setCustomId(calculator_star)
    .setStyle("blurple")
    .setDisabled();
  let qone = new MessageButton()
    .setLabel("1️")
    .setCustomId(calculator_1)
    .setStyle("gray")
    .setDisabled();
  let qtwo = new MessageButton()
    .setLabel("2️")
    .setCustomId(calculator_2)
    .setStyle("gray")
    .setDisabled();
  let qthree = new MessageButton()
    .setLabel("3️")
    .setCustomId(calculator_3)
    .setStyle("gray")
    .setDisabled();
  let qminus = new MessageButton()
    .setLabel("-")
    .setCustomId(calculator_minus)
    .setStyle("blurple")
    .setDisabled();
  let qzero = new MessageButton()
    .setLabel("0️")
    .setCustomId(calculator_0)
    .setStyle("gray")
    .setDisabled();
  let qdot = new MessageButton()
    .setLabel(".")
    .setCustomId(calculator_dot)
    .setStyle("blurple")
    .setDisabled();
  let qequal = new MessageButton()
    .setLabel("=")
    .setCustomId(calculator_equal)
    .setStyle("green")
    .setDisabled();
  let qplus = new MessageButton()
    .setLabel("+")
    .setCustomId(calculator_plus)
    .setStyle("blurple")
    .setDisabled();
  //-----------------------
  const filter = (m) => m.user.id == message.author.id;
  message.channel
    .send({
      content: stringify,
      components: [
        { type: 1, components: [ac, e1, e2, uppercase] },
        { type: 1, components: [seven, eight, nine, slash] },
        { type: 1, components: [four, five, six, star] },
        { type: 1, components: [one, two, three, minus] },
        { type: 1, components: [dot, zero, equal, plus] },
      ],
    })
    .then(async (msg) => {
      async function edit(btn) {
        btn.update({
          content: stringify,
          components: [
            { type: 1, components: [ac, e1, e2, uppercase] },
            { type: 1, components: [seven, eight, nine, slash] },
            { type: 1, components: [four, five, six, star] },
            { type: 1, components: [one, two, three, minus] },
            { type: 1, components: [dot, zero, equal, plus] },
          ],
        });
      }
      const calc = msg.createMessageComponentCollector({
        filter,
        time: 60000,
      });

      calc.on("collect", async (btn) => {
        if (btn.customId === calculator_1) {
          str += "1";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_2) {
          str += "2";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_3) {
          str += "3";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_4) {
          str += "4";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_5) {
          str += "5";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_6) {
          str += "6";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_7) {
          str += "7";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_8) {
          str += "8";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_9) {
          str += "9";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_0) {
          str += "0";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_plus) {
          str += "+";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_minus) {
          str += "-";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_devide) {
          str += "/";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_uppercase) {
          str += "^";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_star) {
          str += "*";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_dot) {
          str += ".";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_ac) {
          str = " ";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_e1) {
          str += "(";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_e2) {
          str += ")";
          stringify = "```\n" + str + "\n```";
          edit(btn);
        } else if (btn.customId === calculator_equal) {
          try {
            str += " = " + require("mathjs").evaluate(str) + "";
            stringify = "```\n" + str + "\n```";
            edit(btn);
            str = "";
            stringify = "```\n" + str + "\n```";
          } catch (e) {
            message.channel
              .send({ content: " An invalid equation was entered!" })
              .then((m) => m.delete({ timeout: 2000 }));

            stringify = "```\n" + str + "\n```";
          }
        }
      });
    });
};
