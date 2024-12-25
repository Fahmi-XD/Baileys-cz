import axios, { AxiosRequestConfig } from 'axios';
import { KeyPair, SignedKeyPair, SocketConfig } from '../Types';
export declare const makeRegistrationSocket: (config: SocketConfig) => {
    register: (code: string) => Promise<ExistsResponse>;
    requestRegistrationCode: (registrationOptions?: RegistrationOptions) => Promise<ExistsResponse>;
    logger: Logger;
    getOrderDetails: (orderId: string, tokenBase64: string) => Promise<import("..").OrderDetails>;
    getCatalog: ({ jid, limit, cursor }: import("..").GetCatalogOptions) => Promise<{
        products: import("..").Product[];
        nextPageCursor: any;
    }>;
    getCollections: (jid?: string, limit?: number) => Promise<{
        collections: import("..").CatalogCollection[];
    }>;
    productCreate: (create: import("..").ProductCreate) => Promise<import("..").Product>;
    productDelete: (productIds: string[]) => Promise<{
        deleted: number;
    }>;
    productUpdate: (productId: string, update: import("..").ProductUpdate) => Promise<import("..").Product>;
    sendMessageAck: ({ tag, attrs, content }: import("..").BinaryNode) => Promise<void>;
    sendRetryRequest: (node: import("..").BinaryNode, forceIncludeKeys?: boolean) => Promise<void>;
    rejectCall: (callId: string, callFrom: string) => Promise<void>;
    fetchMessageHistory: (count: number, oldestMsgKey: import("..").WAMessageKey, oldestMsgTimestamp: number | Long) => Promise<string>;
    requestPlaceholderResend: (messageKey: import("..").WAMessageKey) => Promise<"RESOLVED" | string | undefined>;
    getPrivacyTokens: (jids: string[]) => Promise<import("..").BinaryNode>;
    assertSessions: (jids: string[], force: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: import("..").proto.IMessage, { messageId: msgId, participant, additionalAttributes, additionalNodes, useUserDevicesCache, useCachedGroupMetadata, statusJidList }: import("..").MessageRelayOptions) => Promise<string>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: import("..").MessageReceiptType) => Promise<void>;
    sendReceipts: (keys: import("..").WAMessageKey[], type: import("..").MessageReceiptType) => Promise<void>;
    readMessages: (keys: import("..").WAMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean) => Promise<import("..").MediaConnInfo>;
    waUploadToServer: import("..").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean) => Promise<{
        [_: string]: string;
    }>;
    sendPeerDataOperationMessage: (pdoMessage: import("..").proto.Message.IPeerDataOperationRequestMessage) => Promise<string>;
    createParticipantNodes: (jids: string[], message: import("..").proto.IMessage, extraAttrs?: import("..").BinaryNode["attrs"]) => Promise<{
        nodes: import("..").BinaryNode[];
        shouldIncludeDeviceIdentity: boolean;
    }>;
    getUSyncDevices: (jids: string[], useCache: boolean, ignoreZeroDevices: boolean) => Promise<import("..").JidWithDevice[]>;
    updateMediaMessage: (message: import("..").proto.IWebMessageInfo) => Promise<import("..").proto.IWebMessageInfo>;
    sendMessage: (jid: string, content: import("..").AnyMessageContent, options?: import("..").MiscMessageGenerationOptions) => Promise<import("..").proto.WebMessageInfo | undefined>;
    getNewsletterInfo: (key: string) => Promise<import("..").NewsLetterMetadata>;
    createNewsLetter: (name: string, desc?: string, picture?: import("..").WAMediaUpload) => Promise<import("..").NewsLetterMetadata>;
    getSubscribedNewsletters: () => Promise<import("..").NewsLetterMetadata[]>;
    toggleMuteNewsletter: (jid: string, mute: boolean) => Promise<any>;
    followNewsletter: (jid: string) => Promise<any>;
    unFollowNewsletter: (jid: string) => Promise<any>;
    updateNewsletterName: (jid: string, name: string) => Promise<import("..").NewsLetterMetadata>;
    updateNewsletterDesc: (jid: string, description: string) => Promise<import("..").NewsLetterMetadata>;
    updateNewsletterPicture: (jid: string, picture: import("..").WAMediaUpload) => Promise<import("..").NewsLetterMetadata>;
    updateNewsletterReactionSetting: (jid: string, value: import("..").RectionSettingsNewsletter) => Promise<import("..").NewsLetterMetadata>;
    removeNewsletterPicture: (jid: string) => Promise<import("..").NewsLetterMetadata>;
    groupMetadata: (jid: string) => Promise<import("..").GroupMetadata>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("..").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupRequestParticipantsList: (jid: string) => Promise<{
        [key: string]: string;
    }[]>;
    groupRequestParticipantsUpdate: (jid: string, participants: string[], action: "approve" | "reject") => Promise<{
        status: string;
        jid: string;
    }[]>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("..").ParticipantAction) => Promise<{
        status: string;
        jid: string;
        content: import("..").BinaryNode;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupRevokeInviteV4: (groupJid: string, invitedJid: string) => Promise<boolean>;
    groupAcceptInviteV4: (key: string | import("..").proto.IMessageKey, inviteMessage: import("..").proto.Message.IGroupInviteMessage) => Promise<string>;
    groupGetInviteInfo: (code: string) => Promise<import("..").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "not_announcement" | "locked" | "unlocked") => Promise<void>;
    groupMemberAddMode: (jid: string, mode: "admin_add" | "all_member_add") => Promise<void>;
    groupJoinApprovalMode: (jid: string, mode: "on" | "off") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("..").GroupMetadata;
    }>;
    processingMutex: {
        mutex<T>(code: () => Promise<T> | T): Promise<T>;
    };
    upsertMessage: (msg: import("..").proto.IWebMessageInfo, type: import("..").MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("..").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("..").WAPresence, toJid?: string) => Promise<void>;
    presenceSubscribe: (toJid: string, tcToken?: Buffer) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "preview" | "image", timeoutMs?: number) => Promise<string | undefined>;
    onWhatsApp: (...jids: string[]) => Promise<{
        exists: boolean;
        jid: string;
    }[]>;
    fetchBlocklist: () => Promise<string[]>;
    fetchStatus: (jid: string) => Promise<{
        status: string | undefined;
        setAt: Date;
    } | undefined>;
    updateProfilePicture: (jid: string, content: import("..").WAMediaUpload) => Promise<void>;
    removeProfilePicture: (jid: string) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateProfileName: (name: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: "block" | "unblock") => Promise<void>;
    updateCallPrivacy: (value: import("..").WAPrivacyCallValue) => Promise<void>;
    updateLastSeenPrivacy: (value: import("..").WAPrivacyValue) => Promise<void>;
    updateOnlinePrivacy: (value: import("..").WAPrivacyOnlineValue) => Promise<void>;
    updateProfilePicturePrivacy: (value: import("..").WAPrivacyValue) => Promise<void>;
    updateStatusPrivacy: (value: import("..").WAPrivacyValue) => Promise<void>;
    updateReadReceiptsPrivacy: (value: import("..").WAReadReceiptsValue) => Promise<void>;
    updateGroupsAddPrivacy: (value: import("..").WAPrivacyGroupAddValue) => Promise<void>;
    updateDefaultDisappearingMode: (duration: number) => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<import("..").WABusinessProfile | void>;
    resyncAppState: (collections: readonly ("critical_block" | "critical_unblock_low" | "regular_high" | "regular_low" | "regular")[], isInitialSync: boolean) => Promise<void>;
    chatModify: (mod: import("..").ChatModification, jid: string) => Promise<void>;
    cleanDirtyBits: (type: "account_sync" | "groups", fromTimestamp?: number | string) => Promise<void>;
    addLabel: (jid: string, labels: import("../Types/Label").LabelActionBody) => Promise<void>;
    addChatLabel: (jid: string, labelId: string) => Promise<void>;
    removeChatLabel: (jid: string, labelId: string) => Promise<void>;
    addMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    removeMessageLabel: (jid: string, messageId: string, labelId: string) => Promise<void>;
    star: (jid: string, messages: {
        id: string;
        fromMe?: boolean;
    }[], star: boolean) => Promise<void>;
    type: "md";
    ws: any;
    ev: import("..").BaileysEventEmitter & {
        process(handler: (events: Partial<import("..").BaileysEventMap>) => void | Promise<void>): (() => void);
        buffer(): void;
        createBufferedFunction<A extends any[], T>(work: (...args: A) => Promise<T>): ((...args: A) => Promise<T>);
        flush(force?: boolean): boolean;
        isBuffering(): boolean;
    };
    authState: {
        creds: import("..").AuthenticationCreds;
        keys: import("..").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("..").SignalRepository;
    user: import("..").Contact | undefined;
    generateMessageTag: () => string;
    query: (node: import("..").BinaryNode, timeoutMs?: number) => Promise<import("..").BinaryNode>;
    waitForMessage: <T>(msgId: string, timeoutMs?: number | undefined) => Promise<T>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: import("..").BinaryNode) => Promise<void>;
    logout: (msg?: string) => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (err: Error | axios, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    requestPairingCode: (phoneNumber: string) => Promise<string>;
    waitForConnectionUpdate: (check: (u: Partial<import("..").ConnectionState>) => boolean | undefined, timeoutMs?: number) => Promise<void>;
    sendWAMBuffer: (wamBuffer: Buffer) => Promise<import("..").BinaryNode>;
};
export interface RegistrationData {
    registrationId: number;
    signedPreKey: SignedKeyPair;
    noiseKey: KeyPair;
    signedIdentityKey: KeyPair;
    identityId: Buffer;
    phoneId: string;
    deviceId: string;
    backupToken: Buffer;
}
export interface RegistrationOptions {
    /** your phone number */
    phoneNumber?: string;
    /** the country code of your phone number */
    phoneNumberCountryCode: string;
    /** your phone number without country code */
    phoneNumberNationalNumber: string;
    /** the country code of your mobile network
     * @see {@link https://de.wikipedia.org/wiki/Mobile_Country_Code}
     */
    phoneNumberMobileCountryCode: string;
    /** the network code of your mobile network
     * @see {@link https://de.wikipedia.org/wiki/Mobile_Network_Code}
     */
    phoneNumberMobileNetworkCode: string;
    /**
     * How to send the one time code
     */
    method?: 'sms' | 'voice' | 'captcha';
    /**
     * The captcha code if it was requested
     */
    captcha?: string;
}
export type RegistrationParams = RegistrationData & RegistrationOptions;
export declare function registrationParams(params: RegistrationParams): {
    cc: string;
    in: string;
    Rc: string;
    lg: string;
    lc: string;
    mistyped: string;
    authkey: any;
    e_regid: any;
    e_keytype: string;
    e_ident: any;
    e_skey_id: string;
    e_skey_val: any;
    e_skey_sig: any;
    fdid: string;
    network_ratio_type: string;
    expid: string;
    simnum: string;
    hasinrc: string;
    pid: string;
    id: string;
    backup_token: string;
    token: any;
    fraud_checkpoint_code: string | undefined;
};
/**
 * Requests a registration code for the given phone number.
 */
export declare function mobileRegisterCode(params: RegistrationParams, fetchOptions?: AxiosRequestConfig): Promise<ExistsResponse>;
export declare function mobileRegisterExists(params: RegistrationParams, fetchOptions?: AxiosRequestConfig): Promise<ExistsResponse>;
/**
 * Registers the phone number on whatsapp with the received OTP code.
 */
export declare function mobileRegister(params: RegistrationParams & {
    code: string;
}, fetchOptions?: AxiosRequestConfig): Promise<ExistsResponse>;
/**
 * Encrypts the given string as AEAD aes-256-gcm with the public whatsapp key and a random keypair.
 */
export declare function mobileRegisterEncrypt(data: string): any;
export declare function mobileRegisterFetch(path: string, opts?: AxiosRequestConfig): Promise<ExistsResponse>;
export interface ExistsResponse {
    status: 'fail' | 'sent';
    voice_length?: number;
    voice_wait?: number;
    sms_length?: number;
    sms_wait?: number;
    reason?: 'incorrect' | 'missing_param' | 'code_checkpoint';
    login?: string;
    flash_type?: number;
    ab_hash?: string;
    ab_key?: string;
    exp_cfg?: string;
    lid?: string;
    image_blob?: string;
    audio_blob?: string;
}
