/**
 * @file Библиотека для работы с енотами
 * @author НАДМОЗГ
 * @version 0.9.9.9.9d
 */

/**
 * @name Enot
 * @class
 * @property {Number} age          
 * Возраст енота (в годах)
 * @property {Number} energy       
 * Энергия енота (может меняться от 0 до 100 включительно)
 * @property {Boolean} hungry      
 * Голоден ли енот (да/нет)
 * @property {String} insult_level 
 * Степень обиженности енота. Может принимать одно из 
 * значений 'необижен', 'обижен', 'очень обижен', '"ой, всё!"'.
 * @property {Number} personality
 * Характер енота. Может принимать одно из значений 1, 2, 3. 
 * 1 означает спокойный характер, 2 - беспокойный характер, 3 - жутко кипешной характер.
 * @example 
 * let enot = {
 *   age: 3,
 *   energy: 76,
 *   hungry: true,
 *   insult_level: "очень обижен"
 * }
 */

/**
 * Покупка енота. Все, что мы можем указать - это диапазон возрастов енотов, среди которых
 * нам подберут енота. Если диапазон возраста меньше чем один
 * год, магазин не принимает запрос (возвращает ошибку).
 * Все остальные его параметры случайны, за исключением следующего правила:
 * Если нам попался енот со спокойным характером, то его начальный
 * уровень обиды (insult_level) - 'необижен'. В противном случае уровень обиды случайный, но не 
 * может быть '"ой, всё!"'.
 * @param {Number} min_age Купленный енот будет не младше чем указанный возраст
 * @param {Number} max_age Купленный енот будет не старше чем указанный возраст
 * @returns {Enot|String} 
 * Свеженький, с пылу с жару, енот; либо строка с текстом 
 * ошибки, если енота купить не получилось (здесь могло бы 
 * быть выброшено исключение вместо строки с ошибкой).
 */
function enot_buy(min_age, max_age) {
    // WRITE ME
}

/**
 * Кормежка енота. Подчиняется следующим правилам:
 * При попытке накормить голодного енота он становится неголодным, а уровень обиды 
 * понижается на одну категорию (напр. с "очень обижен" до "обижен").
 * При попытке накормить неголодного енота его уровень обиды вырастает на одну категорию, а у 
 * жутко кипешных енотов - на две категории.
 * В случае успешного кормления (т.е. если енот был голоден) его энергия увеличивается на 20.
 * @param {Enot} enot 
 */
function enot_feed(enot) {
    // WRITE ME
}

/**
 * Поиграть с енотом. Подчиняется следующим правилам:
 * При попытке поиграть с енотом со спокойным характером его уровень обиды понижается
 * на одну категорию (напр. с "очень обижен" до "обижен").
 * При попытке поиграть с енотом с беспокойным характером его уровень обиды 
 * либо понизится, либо останется неизменным с 50% вероятностью.
 * При попытке поиграть с жутко кипешным енотом его уровень обиды 
 * либо понизится, либо повысится с 50% вероятностью.
 * Любой енот после игры теряет 10 энергии и с 30% вероятностью становится голоден.
 * @param {Enot} enot 
 */
function enot_play(enot) {
    // WRITE ME
}
