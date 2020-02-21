import PropTypes from 'prop-types';

export const ColorType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
});

export const GoodType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
});
