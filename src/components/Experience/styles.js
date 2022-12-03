const styles = {
  experience: (theme) => ({
    padding: '44px 20px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    background: '#f5f5f5',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '88px 20px'
    },
  }),
  wrapper: {
    maxWidth: '1240px'
  },
  link: (theme) => ({
    flexGrow: 1,
    // display: 'flex',
    flexWrap: 'wrap',
    maxWdith: '1240px',
    gap: '20px',
    margin: '0 24px 0 0',
    padding: '0 0 12px 0',
    [theme.breakpoints.up('sm')]: {
      gap: '40px',
      maxWidth: '100%'
    }
  }),
  imgItem: (theme) => ({
    width: '100%',
    marginTop: '24px',
    maxWdith: '402px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '44px'
    }
  }),
  contentTitle: (theme) => ({
    fontSize: '14px',
    lineHeight: '17px',
    marginTop: '12px',
    maxWidth: '402px',
    textAlign: 'left',
    margin: '12px auto 0',
    ...theme.typography.someStyle,
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
      lineHeight: '29px'
    }
  })
};

export default styles;