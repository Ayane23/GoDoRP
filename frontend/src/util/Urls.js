const Urls = {};

if (process.env.NODE_ENV === 'production') {
  Urls.api = 'http://192.168.80.128:5000'; // can be different than Dev if needed
} else if (process.env.NODE_ENV === 'development') {
  Urls.api = 'http://192.168.80.128:5000';
}

export default Urls;
