import BigNumber from 'bignumber.js';
import { UniswapV3Route } from '@features/instant-trades/dexes/common/uniswap-v3-abstract/models/uniswap-v3-route';

export interface UniswapV3CalculatedInfo {
    route: UniswapV3Route;
    estimatedGas?: BigNumber;
}

export interface UniswapV3CalculatedInfoWithProfit extends UniswapV3CalculatedInfo {
    estimatedGas: BigNumber;
    profit: BigNumber;
}
