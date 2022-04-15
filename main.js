/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/modalMovieDetails.js":
/*!**************************************!*\
  !*** ./modules/modalMovieDetails.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moviesComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moviesComment.js */ \"./modules/moviesComment.js\");\n\n\nlet commentsLength = 0;\n\nconst modalMovie = (movie, commentsLength) => `\n    <button class=\"btn-close-modal\">x</button>\n    <div class=\"modal-header\">\n      \n        <img src=\"${movie.image.medium}\" alt=\"image title\"/>\n      \n      <h2 class=\"movie-title\">${movie.name}</h2>\n    </div>\n    <div class=\"info-container\">\n      <h3>Genres</h3>\n      <p class=\"genres\">${movie.genres}</p>\n      <p class=\"rating\">Rating: ${movie.rating.average}</p>\n      <p class=\"description\">${movie.summary}</p> \n    </div>\n    <div class=\"info-container comments\">\n      <h3>Comments (<span class=\"counter\">${commentsLength}</span>)</h2>\n      <ul class=\"comment-container list\"></ul>\n      <h3>Add a comment</h3>\n      <div class=\"msgErrorContainer\"></div>\n      <form class='form' action=\"index_submit\" method=\"POST\" accept-charset=\"utf-8\">\n        <input type=\"text\" placeholder=\"Name\" name=\"name\" maxlength=\"20\" required/>\n        <textarea\n          name=\"comment\"\n          maxlength=\"220\"\n          placeholder=\"Your Comments\" cols=\"50\" rows=\"10\" required></textarea>\n        <button type=\"submit\" class=\"btn btn-add-comment\">Comment</button>\n      </form>\n    </div>\n  `;\n\nconst modalSection = document.querySelector('.modal-container');\nconst container = document.querySelector('.container');\n\nconst openModal = () => {\n  modalSection.classList.add('show-modal');\n  container.classList.add('bg-body-modal');\n};\n\nconst closeModal = () => {\n  modalSection.classList.remove('show-modal');\n  container.classList.remove('bg-body-modal');\n  modalSection.innerHTML = '';\n};\n\nconst createModal = (movieData, commentsLength) => {\n  const modalArticle = document.createElement('div');\n  modalArticle.className = 'modal-card';\n  modalArticle.innerHTML = modalMovie(movieData, commentsLength);\n  modalSection.appendChild(modalArticle);\n  const closeModalBtn = document.querySelector('.btn-close-modal');\n  closeModalBtn.addEventListener('click', closeModal);\n};\n\nconst handleMovieModal = (movies) => {\n  const openModalBtn = document.querySelectorAll('.card-comments');\n\n  openModalBtn.forEach((btn, index) => {\n    btn.addEventListener('click', async () => {\n      openModal();\n      commentsLength = await (0,_moviesComment_js__WEBPACK_IMPORTED_MODULE_0__.countComment)(movies[index].id);\n      const urlBase = 'https://api.tvmaze.com/shows/';\n      const url = `${urlBase}${movies[index].id}`;\n      const movieData = await fetch(url)\n        .then((response) => response.json())\n        .then((data) => data);\n\n      createModal(movieData, commentsLength);\n      const form = document.querySelector('.form');\n      form.addEventListener('submit', (event) => {\n        (0,_moviesComment_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(event, form, movies[index].id);\n      });\n      (0,_moviesComment_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(movies[index].id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleMovieModal);\n\n//# sourceURL=webpack://javascript-capstone/./modules/modalMovieDetails.js?");

/***/ }),

/***/ "./modules/modalReservationDetails.js":
/*!********************************************!*\
  !*** ./modules/modalReservationDetails.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reservationHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservationHandler.js */ \"./modules/reservationHandler.js\");\n\n\nlet reservationLength = 0;\n\nconst modalReservation = (movie, reservationLength) => `\n  <button class=\"btn-close-modal\">x</button>\n  <div class=\"modal-header\">\n    <img src=\"${movie.image.medium}\" alt=\"image title\"/>\n    <h2 class=\"movie-title\">${movie.name}</h2>\n  </div>\n  <div class=\"info-container\">\n    <h3>Description</h3>\n    <p class=\"description\">${movie.summary}</p>         \n  </div>\n  <div class=\"info-container reserve\">\n    <h3>Reservations (<span class=\"counter\">${reservationLength}</span>)</h3>\n    <ul class=\"reservation-container list\"></ul>\n    <h3>Add a reservation</h3>\n    <div class=\"msgErrorContainer\"></div>\n    <form class='form' action=\"index_submit\" method=\"POST\" accept-charset=\"utf-8\">\n      <input type=\"text\" placeholder=\"Name\" name=\"name\" maxlength=\"20\" required/>\n      <input class=\"input-date\" type=\"text\" placeholder=\"Start date\" name=\"startDate\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" required/>\n      <input class=\"input-date\" placeholder=\"End date\" type=\"text\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\"  name=\"endDate\"  required/>      \n      <button type=\"submit\" class=\"btn btn-add-reserve\">Reserve</button>\n    </form>\n  </div>\n`;\n\nconst modalSection = document.querySelector('.modal-container');\nconst container = document.querySelector('.container');\n\nconst openModal = () => {\n  modalSection.classList.add('show-modal');\n  container.classList.add('bg-body-modal');\n};\n\nconst closeModal = () => {\n  modalSection.classList.remove('show-modal');\n  container.classList.remove('bg-body-modal');\n  modalSection.innerHTML = '';\n};\n\nconst createModal = (movieData, reservationLength) => {\n  const modalArticle = document.createElement('div');\n  modalArticle.className = 'modal-card';\n  modalArticle.innerHTML = modalReservation(movieData, reservationLength);\n  modalSection.appendChild(modalArticle);\n  const closeModalBtn = document.querySelector('.btn-close-modal');\n  closeModalBtn.addEventListener('click', closeModal);\n};\n\nconst handleReservationModal = (movies) => {\n  const reservationBtn = document.querySelectorAll('.card-reserve');\n\n  reservationBtn.forEach((btn, index) => {\n    btn.addEventListener('click', async () => {\n      openModal();\n      reservationLength = await (0,_reservationHandler_js__WEBPACK_IMPORTED_MODULE_0__.countReservation)(movies[index].id);\n      const urlBase = 'https://api.tvmaze.com/shows/';\n      const url = `${urlBase}${movies[index].id}`;\n      const movieData = await fetch(url)\n        .then((response) => response.json())\n        .then((data) => data);\n\n      createModal(movieData, reservationLength);\n      const form = document.querySelector('.form');\n      form.addEventListener('submit', (event) => {\n        (0,_reservationHandler_js__WEBPACK_IMPORTED_MODULE_0__.addReservation)(event, form, movies[index].id);\n      });\n\n      (0,_reservationHandler_js__WEBPACK_IMPORTED_MODULE_0__.displayReservation)(movies[index].id);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleReservationModal);\n\n//# sourceURL=webpack://javascript-capstone/./modules/modalReservationDetails.js?");

/***/ }),

/***/ "./modules/movies.fetch.js":
/*!*********************************!*\
  !*** ./modules/movies.fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst baseUrl = 'https://api.tvmaze.com/';\n\nconst getMovies = async () => {\n  const response = await fetch(`${baseUrl}shows`)\n    .then((response) => response.json())\n    .then((data) => {\n      const arrSliced = data.slice(0, 60);\n      const newArr = arrSliced.map((movie) => {\n        const container = {\n          id: movie.id,\n          name: movie.name,\n          image: movie.image,\n          end: movie.ended,\n          rating: movie.rating,\n          summary: movie.summary,\n        };\n        return container;\n      });\n      return newArr;\n    });\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n//# sourceURL=webpack://javascript-capstone/./modules/movies.fetch.js?");

/***/ }),

/***/ "./modules/moviesComment.js":
/*!**********************************!*\
  !*** ./modules/moviesComment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"commentsCounter\": () => (/* binding */ commentsCounter),\n/* harmony export */   \"countComment\": () => (/* binding */ countComment),\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\n\nconst appID = 'Ngyhlqhta3I7behhBDEq';\n\nconst getComment = async (id) => {\n  const resolve = await fetch(`${baseURL}/${appID}/comments?item_id=${id}`);\n  const result = await resolve.json();\n\n  if (!result.length) {\n    return [];\n  }\n\n  return result;\n};\n\nconst postComment = async (username, comment, id) => {\n  const resolve = await fetch(`${baseURL}/${appID}/comments`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n    }),\n    headers: { 'Content-type': 'application/JSON' },\n  });\n\n  const result = await resolve.text();\n  return result;\n};\n\nconst commentsCounter = (comments) => {\n  if (!comments.length) {\n    return 0;\n  }\n\n  return comments.length;\n};\n\nconst countComment = async (id) => {\n  const comments = await getComment(id);\n  return commentsCounter(comments);\n};\n\nconst displayComments = async (id) => {\n  const ul = document.querySelector('.comment-container');\n  const commentArr = await getComment(id);\n  ul.innerHTML = '';\n\n  commentArr.forEach((elem) => {\n    const date = new Date(elem.creation_date);\n    ul.innerHTML += `\n    <li>\n      <span>${date.toLocaleDateString('en-US')}</span>\n      <span>${elem.username}: </span>\n      <span>${elem.comment}</span>\n    </li>`;\n  });\n};\n\nconst addComment = async (e, form, id) => {\n  e.preventDefault();\n  const { name, comment } = form.elements;\n  const num = document.querySelector('.counter');\n  const ul = document.querySelector('.comment-container');\n\n  await postComment(name.value, comment.value, id);\n  const date = new Date();\n  ul.innerHTML += `\n    <li>\n      <span>${date.toLocaleDateString('en-US')}</span>\n      <span>${name.value}: </span>\n      <span>${comment.value}</span>\n    </li>`;\n  num.textContent = parseInt(num.textContent, 10) + 1;\n  form.reset();\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./modules/moviesComment.js?");

/***/ }),

/***/ "./modules/moviesCounter.js":
/*!**********************************!*\
  !*** ./modules/moviesCounter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countDisplay\": () => (/* binding */ countDisplay),\n/* harmony export */   \"countItems\": () => (/* binding */ countItems),\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\nconst counter = (items) => {\n  let itemCount = 0;\n\n  items.forEach(() => {\n    itemCount += 1;\n  });\n  return itemCount;\n};\n\nconst countDisplay = (count) => {\n  const navList1 = document.querySelector('#count-movies');\n  navList1.innerHTML = `<li class=\"nav-item\">(${count}) MOVIES</li>`;\n};\n\nconst countItems = (movies) => {\n  const number = counter(movies);\n  countDisplay(number);\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./modules/moviesCounter.js?");

/***/ }),

/***/ "./modules/moviesDisplay.js":
/*!**********************************!*\
  !*** ./modules/moviesDisplay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _movieslikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieslikes.js */ \"./modules/movieslikes.js\");\n/* harmony import */ var _moviesCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moviesCounter.js */ \"./modules/moviesCounter.js\");\n\n\n\nconst moviesDisplay = (data) => {\n  const moviesSection = document.querySelector('.cards');\n  data.forEach((movie) => {\n    const card = document.createElement('div');\n    card.classList.add('card');\n    card.innerHTML = `\n        <div class=\"card-image-container\">\n           <img src=${movie.image.medium}\n             alt=\"ant-man\">\n        </div>\n        <div class=\"card-content\">\n          <p class=\"card-title\">\n            ${movie.name}\n          </p>\n          <div class=\"card-info\">\n            <button class=\"card-comments\">Comments</button>\n            <button class=\"card-reserve\">Reservations</button>\n            <button id=${movie.id} class=\" card-likes\">Likes</button>\n          </div>\n        </div>    \n    `;\n\n    moviesSection.appendChild(card);\n    const likesBtn = document.getElementById(`${movie.id}`);\n    likesBtn.addEventListener('click', () => {\n      (0,_movieslikes_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(movie.id);\n      const num = likesBtn.textContent.split(' ');\n      likesBtn.innerHTML = `${Number(num[0]) + 1} likes`;\n    });\n  });\n\n  (0,_moviesCounter_js__WEBPACK_IMPORTED_MODULE_1__.countItems)(data);\n  (0,_movieslikes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesDisplay);\n\n//# sourceURL=webpack://javascript-capstone/./modules/moviesDisplay.js?");

/***/ }),

/***/ "./modules/movieslikes.js":
/*!********************************!*\
  !*** ./modules/movieslikes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n\nconst appID = 'Ngyhlqhta3I7behhBDEq';\n\nconst addLike = async (id) => {\n  const connectLink = await fetch(`${baseURL}${appID}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({ item_id: id }),\n    headers: { 'Content-type': 'application/JSON' },\n  });\n\n  const response = await connectLink.text();\n  return response;\n};\n\nconst getLike = async () => {\n  const connectLink = await fetch(`${baseURL}${appID}/likes`);\n  const response = await connectLink.json();\n  return response;\n};\n\nconst updateLikes = () => {\n  getLike(appID).then((response) => {\n    response.forEach((elem) => {\n      const wrapper = document.getElementById(`${elem.item_id}`);\n\n      wrapper.innerHTML = `${elem.likes} Likes`;\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://javascript-capstone/./modules/movieslikes.js?");

/***/ }),

/***/ "./modules/reservationHandler.js":
/*!***************************************!*\
  !*** ./modules/reservationHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addReservation\": () => (/* binding */ addReservation),\n/* harmony export */   \"countReservation\": () => (/* binding */ countReservation),\n/* harmony export */   \"displayReservation\": () => (/* binding */ displayReservation),\n/* harmony export */   \"getReservation\": () => (/* binding */ getReservation),\n/* harmony export */   \"reservationCounter\": () => (/* binding */ reservationCounter)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\n\nconst appID = 'Ngyhlqhta3I7behhBDEq';\n\nconst postReservation = async (username, dateStart, dateEnd, id) => {\n  const resolve = await fetch(`${baseURL}/${appID}/reservations`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      date_start: dateStart,\n      date_end: dateEnd,\n    }),\n    headers: { 'Content-type': 'application/JSON' },\n  });\n\n  const result = await resolve.text();\n  return result;\n};\n\nconst getReservation = async (id) => {\n  const resolve = await fetch(`${baseURL}/${appID}/reservations?item_id=${id}`);\n  const result = await resolve.json();\n\n  if (!result.length) {\n    return [];\n  }\n\n  return result;\n};\n\nconst reservationCounter = (data) => {\n  if (!data.length) return 0;\n  return data.length;\n};\n\nconst countReservation = async (id) => {\n  const reserveNum = await getReservation(id);\n  return reservationCounter(reserveNum);\n};\n\nconst displayReservation = async (id) => {\n  const ul = document.querySelector('.reservation-container');\n  const reserveArr = await getReservation(id);\n  ul.innerHTML = '';\n\n  reserveArr.forEach((elem) => {\n    const dateStart = new Date(elem.date_start);\n    const dateEnd = new Date(elem.date_end);\n\n    ul.innerHTML += `\n    <li>\n      <span>${dateStart.toLocaleDateString('en-US')} -</span>\n      <span>${dateEnd.toLocaleDateString('en-US')} </span>\n      <span>by ${elem.username}</span>\n    </li>`;\n  });\n\n  const num = document.querySelector('.counter');\n  num.textContent = await countReservation(id);\n};\n\nconst addReservation = async (e, form, id) => {\n  e.preventDefault();\n  const num = document.querySelector('.counter');\n  const { name, startDate, endDate } = form.elements;\n\n  await postReservation(name.value, startDate.value, endDate.value, id);\n  const ul = document.querySelector('.reservation-container');\n  const dateStart = new Date(startDate.value);\n  const dateEnd = new Date(endDate.value);\n\n  ul.innerHTML += `\n  <li>\n    <span>${dateStart.toLocaleDateString('en-US')} -</span>\n    <span>${dateEnd.toLocaleDateString('en-US')} </span>\n    <span>by ${name.value}</span>\n  </li>`;\n  num.textContent = parseInt(num.textContent, 10) + 1;\n  form.reset();\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./modules/reservationHandler.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Asap:ital,wght@1,400;1,500;1,600;1,700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-family: 'Asap', sans-serif;\\n  font-size: 65%;\\n}\\n\\nbody {\\n  color: #eefbfb;\\n  background-color: #12232e;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\na {\\n  color: #eefbfb;\\n  all: unset;\\n}\\n\\nbutton {\\n  border-radius: 5px;\\n  border: 2px solid #007cc7;\\n  background-color: #4da8da;\\n  height: 3rem;\\n  width: 9rem;\\n  font-weight: bolder;\\n}\\n\\nbutton:hover {\\n  border: #eefbfb;\\n  background-color: #4da8da;\\n  color: #eefbfb;\\n  font-weight: bolder;\\n}\\n\\n.sub-header {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  margin: 24px 5%;\\n}\\n\\n.movies {\\n  font-weight: 300;\\n  color: #eefbfb;\\n  background-color: #007cc7;\\n  padding: 4px 16px;\\n  border-radius: 4px;\\n}\\n\\n.filter {\\n  font-weight: 300;\\n  color: #203647;\\n  background-color: #eefbfb;\\n  padding: 4px 16px;\\n  border-radius: 4px;\\n}\\n\\n.center {\\n  text-align: center;\\n  margin-bottom: 50px;\\n  font-family: 'Rubik', sans-serif;\\n  font-size: 18px;\\n}\\n\\n.pagination a {\\n  cursor: pointer;\\n  color: #12232e;\\n  padding: 8px 16px;\\n  text-decoration: none;\\n  transition: background-color 0.3s;\\n  background-color: #eefbfb;\\n  border-radius: 4px;\\n}\\n\\n.pagination a.active,\\n.blue {\\n  background-color: #007cc7;\\n  color: #eefbfb;\\n}\\n\\n.pagination a.hover {\\n  background-color: #eefbfb;\\n  color: #007cc7;\\n}\\n\\nheader,\\nfooter {\\n  display: flex;\\n  width: 90vw;\\n  height: 10vh;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 2rem auto;\\n  padding: 0 2rem;\\n  font-size: 2rem;\\n  border: 3px solid #4da8da;\\n  border-radius: 10px;\\n  background-color: #e5e5e5;\\n  z-index: 1;\\n}\\n\\nh1 {\\n  font-size: 34px;\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n}\\n\\n.white-blue {\\n  color: #eefbfb;\\n  background-color: #4da8da;\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n}\\n\\n.logo {\\n  font-size: 36px;\\n  color: #007cc7;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  list-style: none;\\n  gap: 2rem;\\n  cursor: pointer;\\n  font-size: 18px;\\n  font-family: 'Oswald', sans-serif;\\n  color: #555;\\n}\\n\\n.nav-item:not(:last-child) {\\n  border-right: 2.5px solid #007cc7;\\n  padding-right: 1rem;\\n}\\n\\n.nav-item:hover {\\n  color: #4da8da;\\n}\\n\\n.form-control {\\n  width: 60%;\\n  height: 34px;\\n  padding: 6px 12px;\\n  font-size: 14px;\\n  line-height: 1.42857143;\\n  color: #555;\\n  background-image: none;\\n  border: 2px solid #4da8da;\\n  border-radius: 4px;\\n}\\n\\nfooter h1 {\\n  color: #203647;\\n  font-size: 26px;\\n}\\n\\n.follow {\\n  color: #007cc7;\\n  font-size: 14px;\\n  font-family: 'Asap', sans-serif;\\n  font-weight: 600;\\n}\\n\\n.connect {\\n  display: flex;\\n  gap: 1rem;\\n}\\n\\n.fa:hover {\\n  opacity: 0.7;\\n}\\n\\n.fa-twitter,\\n.fa-github,\\n.fa-linkedin,\\n.fa-medium,\\n.fa-angellist {\\n  color: #ec4252;\\n}\\n\\n/* main */\\n.cards {\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 1.6rem;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 1.4rem;\\n  border: 3px solid #4da8da;\\n  border-radius: 10px;\\n  padding: 1.4rem;\\n}\\n\\n.card-image-container {\\n  display: block;\\n  max-width: 30rem;\\n  border-radius: 7px;\\n  cursor: pointer;\\n  transition: 0.4s;\\n}\\n\\n.card-image-container:hover {\\n  transform: scale(1.1);\\n}\\n\\n.card-title {\\n  font-size: 2rem;\\n  text-align: center;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.card-likes {\\n  color: #ec4252;\\n  margin-block-start: 1.33em;\\n  margin-block-end: 1.33em;\\n  margin-inline-start: 0;\\n  margin-inline-end: 0;\\n  font-weight: bold;\\n  background-color: #eefbfb;\\n}\\n\\n.card-likes:hover {\\n  background-color: #ec4252;\\n}\\n\\n.card-likes:active {\\n  background-color: #671050;\\n}\\n\\n/* end main */\\n\\n/* modal start */\\n.modal-container {\\n  position: fixed;\\n  width: 60%;\\n  height: 95%;\\n  display: none;\\n  flex-direction: column;\\n  align-items: center;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 1px solid #bec4c1;\\n  border-radius: 10px;\\n  background-color: #12232e;\\n  overflow-y: auto;\\n}\\n\\n.bg-body-modal {\\n  background-color: #000000e6;\\n  filter: blur(5px);\\n}\\n\\n.modal-header {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  row-gap: 15px;\\n  margin-top: 5px;\\n}\\n\\n.show-modal {\\n  display: flex;\\n}\\n\\n.modal-header h2 {\\n  font-size: 50px;\\n}\\n\\n.btn-close-modal {\\n  position: absolute;\\n  top: 8px;\\n  right: 38px;\\n  align-self: flex-end;\\n  border-style: none;\\n  border-radius: 50%;\\n  background-color: #fff;\\n  font-size: 3rem;\\n  cursor: pointer;\\n  outline: none;\\n  width: 4rem;\\n  height: 4rem;\\n  margin: 2rem 2rem 0 0;\\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);\\n  z-index: 10;\\n}\\n\\n.btn-close-modal:hover {\\n  color: #4da8da;\\n  background-color: #203647;\\n}\\n\\n.btn-close-modal:active {\\n  color: #eefbfb;\\n  background-color: #4da8da;\\n}\\n\\n.modal-card img {\\n  width: 20%;\\n  border-radius: 5px;\\n}\\n\\n.modal-card .info-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 0 50px;\\n  row-gap: 5px;\\n  margin-top: 10px;\\n}\\n\\n.modal-card h3 {\\n  color: #007cc7;\\n  font-size: 25px;\\n  font-weight: 700;\\n  text-align: center;\\n}\\n\\n.modal-card p {\\n  text-align: center;\\n  font-size: 21px;\\n  line-height: 30px;\\n}\\n\\n.rating {\\n  color: #007cc7;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  row-gap: 16px;\\n  margin: 10px 0;\\n  padding: 10px;\\n}\\n\\n.form input {\\n  padding: 5px;\\n  height: 35px;\\n  border-radius: 5px;\\n  font-size: 20px;\\n}\\n\\n.form textarea {\\n  height: 100px;\\n  padding: 5px;\\n  border-radius: 5px;\\n  font-size: 20px;\\n}\\n\\n.form button {\\n  width: 120px;\\n  height: 40px;\\n  font-size: 20px;\\n  border: none;\\n  border-radius: 5px;\\n  background-color: #007cc7;\\n  color: #fff;\\n  cursor: pointer;\\n  margin-top: 10px;\\n}\\n\\n.form button:hover {\\n  border: 1px solid #fff;\\n}\\n\\n.list {\\n  font-size: 20px;\\n  list-style: none;\\n  row-gap: 5px;\\n  margin-bottom: 10px;\\n}\\n\\n.list li {\\n  margin-top: 10px;\\n}\\n\\n.input-date {\\n  width: 100%;\\n}\\n\\n/* modal end */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_movies_fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/movies.fetch.js */ \"./modules/movies.fetch.js\");\n/* harmony import */ var _modules_moviesDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/moviesDisplay.js */ \"./modules/moviesDisplay.js\");\n/* harmony import */ var _modules_modalReservationDetails_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/modalReservationDetails.js */ \"./modules/modalReservationDetails.js\");\n/* harmony import */ var _modules_modalMovieDetails_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/modalMovieDetails.js */ \"./modules/modalMovieDetails.js\");\n\n\n\n\n\n\n\n(0,_modules_movies_fetch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((movieList) => {\n  (0,_modules_moviesDisplay_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieList);\n  (0,_modules_modalMovieDetails_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(movieList);\n  (0,_modules_modalReservationDetails_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movieList);\n});\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;