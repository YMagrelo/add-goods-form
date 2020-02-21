import React from 'react';
import PropTypes from 'prop-types';
import { GoodType } from './constants';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(GoodType).isRequired,
};
