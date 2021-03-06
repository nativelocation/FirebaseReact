/**
 * Conexus-Tech - Retail Companion Web Interface AT&T
 * https://conexustech.com/
 * @flow
 */

import { createSelector } from 'reselect';

const firebaseSelector = state => state.get('firebase');
const usersSelector = createSelector([firebaseSelector], firebase => firebase.get('users').toJS());
const locationsSelector = createSelector([firebaseSelector], firebase => firebase.get('locations').toJS());
const productsSelector = createSelector([firebaseSelector], firebase => firebase.get('products').toJS());
const cardTypesSelector = createSelector([firebaseSelector], firebase => firebase.get('cardTypes').toJS());
const areasSelector = createSelector([firebaseSelector], firebase => firebase.get('areas').toJS());
const vodSelector = createSelector([firebaseSelector], firebase => firebase.get('vod').toJS());
const currentUserSelector = createSelector([firebaseSelector], firebase => firebase.get('currentUser').toJS());
const userErrorSelector = createSelector([firebaseSelector], firebase => firebase.get('userError'));
const accessUserListSelector = createSelector([firebaseSelector], firebase => firebase.get('accessUserList'));
const newDocIdSelector = createSelector([firebaseSelector], firebase => firebase.get('newDocId'));
const newDocErrorSelector = createSelector([firebaseSelector], firebase => firebase.get('newDocError'));

export {
  firebaseSelector,
  usersSelector,
  locationsSelector,
  productsSelector,
  cardTypesSelector,
  areasSelector,
  vodSelector,
  currentUserSelector,
  userErrorSelector,
  accessUserListSelector,
  newDocIdSelector,
  newDocErrorSelector,
};
