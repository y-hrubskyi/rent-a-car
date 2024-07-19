import { theme } from '@/styles/theme';

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    padding: `${theme.spacing(7)} ${theme.spacing(9)}`,
    borderRadius: theme.radii.input,
    cursor: 'pointer',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: theme.colors.selectBg,
    '& .css-tj5bde-Svg': {
      transform: state.menuIsOpen && 'rotate(180deg)'
    }
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.11111,
    color: theme.colors.dark()
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit'
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit'
  }),
  input: baseStyles => ({
    ...baseStyles,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  clearIndicator: baseStyles => ({
    ...baseStyles,
    padding: 0,
    color: theme.colors.grayForInputs(0.5),
    transition: theme.transition('color'),
    '&:hover': {
      color: theme.colors.dark()
    }
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    padding: 0,
    color: theme.colors.dark(),
    '&:hover': {
      color: theme.colors.dark()
    },
    '& .css-tj5bde-Svg': {
      transition: theme.transition('transform')
    }
  }),
  menu: baseStyles => ({
    ...baseStyles,
    marginTop: theme.spacing(2),
    marginBottom: 0,
    paddingTop: theme.spacing(5),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    zIndex: 10,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.input,
    boxShadow: 'none',
    border: `1px solid ${theme.colors.dark(0.05)}`
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    height: '100%',
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      background: theme.colors.dark(0.05)
    }
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(9),
    paddingRight: theme.spacing(9),
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.25,
    color: theme.colors.dark(state.isSelected ? 1 : 0.2),
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: theme.transition('color'),
    '&:hover': {
      color: theme.colors.dark()
    },
    '&:active': {
      backgroundColor: 'transparent'
    }
  })
};
