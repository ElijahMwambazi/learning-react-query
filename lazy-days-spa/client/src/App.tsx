// import { ChakraProvider } from '@chakra-ui/react';
// import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
// import { queryClient } from '../../react-query/queryClient';
// import { theme } from '../../theme';
// import { Loading } from './Loading';
// import { Navbar } from './Navbar';
// import { Routes } from './Routes';

const App = () => {
  return (
    <div className="App">
      {/* <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Loading />
          <Routes />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider> */}
    </div>
  );
};

export default App;
