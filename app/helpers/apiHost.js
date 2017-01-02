let apiHost = '';

if (process.env.NODE_ENV === 'development') {
  apiHost = 'api.groupapp.io'
} else {
  apiHost = 'groupapi.rickisen.se';
}

export default apiHost;
