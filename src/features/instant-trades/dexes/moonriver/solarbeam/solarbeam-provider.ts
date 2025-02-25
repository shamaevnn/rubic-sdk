import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { UniswapV2AbstractProvider } from '@features/instant-trades/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SOLARBEAM_PROVIDER_CONFIGURATION } from '@features/instant-trades/dexes/moonriver/solarbeam/constants';
import { SolarbeamTrade } from '@features/instant-trades/dexes/moonriver/solarbeam/solarbeam-trade';

export class SolarbeamProvider extends UniswapV2AbstractProvider<SolarbeamTrade> {
    public readonly blockchain = BLOCKCHAIN_NAME.MOONRIVER;

    public readonly InstantTradeClass = SolarbeamTrade;

    public readonly providerSettings = SOLARBEAM_PROVIDER_CONFIGURATION;
}
