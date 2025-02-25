import { UniswapV2ProviderConfiguration } from '@features/instant-trades/dexes/common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration';

const defaultBscRoutingProvidersAddresses = [
    '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // WBNB
    '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // CAKE
    '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
    '0x55d398326f99059fF775485246999027B3197955', // USDT
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', // BTCB
    '0x23396cF899Ca06c4472205fC903bDB4de249D6fC', // UST
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', // ETH
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d' // USDC
];

const defaultBscWethAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';

export const defaultBscProviderConfiguration: UniswapV2ProviderConfiguration = {
    maxTransitTokens: 3,
    routingProvidersAddresses: defaultBscRoutingProvidersAddresses,
    wethAddress: defaultBscWethAddress
};
