import { TradeType } from 'src/features';
import { UniswapV3QuoterController } from '@features/instant-trades/dexes/common/uniswap-v3-abstract/utils/quoter-controller/uniswap-v3-quoter-controller';
import { Cache } from 'src/common';
import { UniswapV3AbstractTrade } from '@features/instant-trades/dexes/common/uniswap-v3-abstract/uniswap-v3-abstract-trade';
import { UniswapV3RouterConfiguration } from '@features/instant-trades/dexes/common/uniswap-v3-abstract/models/uniswap-v3-router-configuration';
import { UniswapV3AlgebraAbstractProvider } from '@features/instant-trades/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-provider';
import { UniswapV3AlgebraTradeStruct } from '@features/instant-trades/dexes/common/uniswap-v3-algebra-abstract/uniswap-v3-algebra-abstract-trade';
import { UniswapV3Route } from '@features/instant-trades/dexes/common/uniswap-v3-abstract/models/uniswap-v3-route';
import { UniswapV3TradeClass } from '@features/instant-trades/dexes/common/uniswap-v3-abstract/models/uniswap-v3-trade-class';

export abstract class UniswapV3AbstractProvider<
    T extends UniswapV3AbstractTrade = UniswapV3AbstractTrade
> extends UniswapV3AlgebraAbstractProvider<T> {
    protected abstract readonly InstantTradeClass: UniswapV3TradeClass<T>;

    protected abstract readonly routerConfiguration: UniswapV3RouterConfiguration<string>;

    protected readonly isRubicOptimisationEnabled: boolean = false;

    @Cache
    protected get quoterController(): UniswapV3QuoterController {
        return new UniswapV3QuoterController(this.blockchain, this.routerConfiguration);
    }

    public get type(): TradeType {
        return this.InstantTradeClass.type;
    }

    protected createTradeInstance(
        tradeStruct: UniswapV3AlgebraTradeStruct,
        route: UniswapV3Route
    ): T {
        return new this.InstantTradeClass({
            ...tradeStruct,
            route
        });
    }
}
