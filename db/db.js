/**
 * @file Библиотека, реализующая простую in-memory базу данных. 
 * @author Dmitry Kunekin
 * @version 0.0.0.0.0.0.1a
 */

'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed."); }
//////////////////////////////////////////////////

/**
 * Создает новую базу данных. 
 * При считывании и записи объектов в базу происходит их копирование JSON'ификацией.
 * См. секцию Unit Tests для примера использования.
 * @returns {DB} Пустая, только что созданная, база данных
 */
function db_initialize() {
    // WRITE ME
    // return ...
}

/**
 * Сохраняет копию объекта в базе данных под случайно сгенерированным 
 * идентификатором и возвращает этот идентификатор. См. секцию Unit Tests для примера использования.
 * @param {DB} db - База данных, в которую будет добавлен объект
 * @param {Object} entity - Этот объект будет сохранен в базу
 * @returns {String} Идентификатор только что добавленного объекта
 */
function db_add_entity(db, entity) {
    // WRITE ME
    // return ...
}

/**
 * Сохраняет копию объекта в базе данных под указанным идентификатором.
 * См. секцию Unit Tests для примера использования.
 * @param {DB} db - База данных, в которую будет добавлен объект
 * @param {String} id - Идентификатор, под которым объект будет добавлен
 * @param {Object} entity - Этот объект будет сохранен в базу
 */
function db_add_entity_by_id(db, id, entity) {
    // WRITE ME
}

/**
 * Считывает объект из базы данных под указанным идентификатором. 
 * Полученный объект является копией объекта из базы.
 * См. секцию Unit Tests для примера использования.
 * @param {DB} db - База данных, из которой будет считан объект
 * @param {String} id - Идентификатор объекта для считывания
 * @returns {Object|undefined} Запрашиваемый объект. Равен `undefined` если указанный идентификатор отсутствует.
 */
function db_get_entity_by_id(db, id) {
    // WRITE ME
    // return ...
}

//////////////////////////////////////////////////
// Unit Tests
function test_db_initialize() {
    // Тестирует что база данных создается и возвращаемый объект определен и не null
    let db = db_initialize();

    assert(db !== undefined && db !== null);
}

function test_db_add_entity1() {
    // Тестирует что объект можно добавить в базу
    let db = db_initialize();
    let data_to_add = {
        huy: "jopa",
        'lamer': 'huyamer',
        pizda: "haha",
        "privet": "huyvet"
    };
    let id = db_add_entity(db, data_to_add);

    assert(id !== undefined && id !== null);
    assert(id !== "");
}

function test_db_add_entity2() {
    // Тестирует что два одинаковых объекта можно добавить в базу, и полученные id будут различны
    // WRITE ME
    assert(false);
}

function test_db_add_entity3() {
    // Тестирует что один и тот же объект можно добавить в базу два раза, и полученные id будут различны
    // WRITE ME
    assert(false);
}

function test_db_get_entity_by_id1() {
    // Тестирует что можно записать объект в базу и затем прочитать его из базы по полученному id
    // Также проверяет, что прочитанный объект идентичен изначальному
    // WRITE ME
    assert(false);
}

function test_db_get_entity_by_id2() {
    // Тестирует что если записать объект в базу, изменить одно из его свойств и затем 
    // прочитать его из базы, то полученный объект будет идентичен исходному,
    // а не измененному.
    // WRITE ME
    assert(false);
}

function test_db_add_entity_by_id1() {
    // Тестирует что можно добавить объект в базу с собственноручно выбранным id
    // WRITE ME
    assert(false);
}

function test_db_add_entity_by_id2() {
    // Тестирует что можно добавить объект в базу с собственноручно выбранным id
    // затем считать его из базы и полученный объект будет идентичен исходному
    // WRITE ME
    assert(false);
}

function test_db_add_entity_by_id3() {
    // Тестирует что при добавлении двух разных объектов с одним и тем же id запишется
    // объект, добавленный последним.
    // WRITE ME
    assert(false);
}

test_db_initialize();
test_db_add_entity1();
test_db_add_entity2();
test_db_add_entity3();
test_db_get_entity_by_id1();
test_db_get_entity_by_id2();
test_db_add_entity_by_id1();
test_db_add_entity_by_id2();
test_db_add_entity_by_id3();
