/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LotteryInterface extends utils.Interface {
  contractName: "Lottery";
  functions: {
    "endLottery()": FunctionFragment;
    "enter()": FunctionFragment;
    "fee()": FunctionFragment;
    "getEntranceFee()": FunctionFragment;
    "getPlayers()": FunctionFragment;
    "keyhash()": FunctionFragment;
    "latestRandomNumber()": FunctionFragment;
    "latestWinner()": FunctionFragment;
    "lotteryState()": FunctionFragment;
    "owner()": FunctionFragment;
    "players(uint256)": FunctionFragment;
    "rawFulfillRandomness(bytes32,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startLottery()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "usdEntranceFee()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "endLottery",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "enter", values?: undefined): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getEntranceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "keyhash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "latestRandomNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestWinner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lotteryState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "players",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomness",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startLottery",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "usdEntranceFee",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "endLottery", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEntranceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPlayers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keyhash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lotteryState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "players", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startLottery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usdEntranceFee",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RequestedRandomNumber(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestedRandomNumber"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RequestedRandomNumberEvent = TypedEvent<
  [string],
  { requestId: string }
>;

export type RequestedRandomNumberEventFilter =
  TypedEventFilter<RequestedRandomNumberEvent>;

export interface Lottery extends BaseContract {
  contractName: "Lottery";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    endLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enter(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEntranceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPlayers(overrides?: CallOverrides): Promise<[string[]]>;

    keyhash(overrides?: CallOverrides): Promise<[string]>;

    latestRandomNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestWinner(overrides?: CallOverrides): Promise<[string]>;

    lotteryState(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    players(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usdEntranceFee(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  endLottery(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enter(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

  getPlayers(overrides?: CallOverrides): Promise<string[]>;

  keyhash(overrides?: CallOverrides): Promise<string>;

  latestRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

  latestWinner(overrides?: CallOverrides): Promise<string>;

  lotteryState(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  players(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  rawFulfillRandomness(
    requestId: BytesLike,
    randomness: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startLottery(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usdEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    endLottery(overrides?: CallOverrides): Promise<void>;

    enter(overrides?: CallOverrides): Promise<void>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayers(overrides?: CallOverrides): Promise<string[]>;

    keyhash(overrides?: CallOverrides): Promise<string>;

    latestRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    latestWinner(overrides?: CallOverrides): Promise<string>;

    lotteryState(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    players(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    startLottery(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    usdEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RequestedRandomNumber(bytes32)"(
      requestId?: null
    ): RequestedRandomNumberEventFilter;
    RequestedRandomNumber(requestId?: null): RequestedRandomNumberEventFilter;
  };

  estimateGas: {
    endLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enter(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    getEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getPlayers(overrides?: CallOverrides): Promise<BigNumber>;

    keyhash(overrides?: CallOverrides): Promise<BigNumber>;

    latestRandomNumber(overrides?: CallOverrides): Promise<BigNumber>;

    latestWinner(overrides?: CallOverrides): Promise<BigNumber>;

    lotteryState(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    players(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usdEntranceFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    endLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enter(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntranceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPlayers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keyhash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRandomNumber(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestWinner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lotteryState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    players(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startLottery(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usdEntranceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
