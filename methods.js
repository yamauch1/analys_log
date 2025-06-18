const jsonData = [
  {
    stored_name: "stored_method1",
    description: "table1のculum1にargを更新する",
    output_color: "#007acc",
  },
  {
    stored_name: "stored_method2",
    description: "table2のculum2にargを更新する",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_orsys_id_to_ward_id_view",
    description: "orsys_idから抽出したsite_id、ward_idを返します",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_infection_value_master",
    description: " 感染症検査結果リスト情報を返す  ",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_infection_master",
    description: " 感染症項目リスト情報を返す ",
    output_color: "#000000",
  },
  {
    stored_name: "prc_entry_preoperative_data",
    description: "術前情報を取得する",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_sex_master",
    description: "性別リスト情報を返す",
    output_color: "#a0a0a0",
  },
  {
    stored_name: "prc_list_blood_master",
    description: "血液型(ABO)リスト情報を返す  ",
    output_color: "#a0a0a0",
  },
    {
    stored_name: "prc_list_blood_rh_master",
    description: "血液型(RH)リスト情報を返す",
    output_color: "#a0a0a0",
  },
    {
    stored_name: "prc_list_pre_examin_status_master",
    description: "術前状態リスト情報を返す    ",
    output_color: "#000000",
  },
    {
    stored_name: "prc_list_pre_examin_class_master ",
    description: "血液型(ABO)リスト情報を返す  ",
    output_color: "#a0a0a0",
  },
    {
    stored_name: "prc_entry_vital_view",
    description: "トレンド手入力情報を取得",
    output_color: "#000000",
  },
    {
    stored_name: "prc_list_syringe_summary_id_view",
    description: "シリンジのmedi_summary_idを返す",
    output_color: "#000000",
  },
   {
    stored_name: "prc_list_section_master",
    description: "診療科リスト情報を返す",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_floor_master",
    description: "病棟リスト情報を返す",
    output_color: "#000000",
  },
  {
    stored_name: "prc_entry_staff_duty_data",
    description: "利用者IDから麻酔科医・看護師・MEの情報を返す",
    output_color: "#000000",
  },
  {
    stored_name: "prc_entry_center_menu_ope_view",
    description: "指定された手術日の手術情報を返す",
    output_color: "#000000",
  },
  {
    stored_name: "hoge_hoge_hoge",
    description: "orsys_idから抽出したsite_id、ward_idを返します",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_pre_examin_class_master",
    description: "術前診察クラス情報を返す",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_pre_examin_class_to_check_link",
    description: "術前チェックアイテム情報を返す",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_pre_examin_class_to_note_link",
    description: "術前チェックアイテム情報を返す",
    output_color: "#a0a0a0",
  },
  {
    stored_name: "prc_list_pre_examin_item_master",
    description: "術前チェックアイテム情報を返す",
    output_color: "#a0a0a0",
  },
  {
    stored_name: "prc_list_pre_examin_item_to_sub_link",
    description: "術前チェック分類項目リスト情報を返す",
    output_color: "#000000",
  },
  {
    stored_name: "prc_list_pre_examin_check_to_sub_check_link",
    description: "術前チェック分類項目リスト情報を返す",
    output_color: "#a0a0a0",
  },
    {
    stored_name: "prc_list_pre_examin_monitor_master",
    description: "モニターリスト情報を返す",
    output_color: "#000000",
  },
    {
    stored_name: "prc_list_fulltime_doctor",
    description: "常勤医情報を返す",
    output_color: "#000000",
  },
    {
    stored_name: "prc_entry_preoperative_data",
    description: "XMLで各種情報を取得。術前情報を取得する  ",
    output_color: "#000000",
  },
      {
    stored_name: "prc_list_anesth_flag_master",
    description: "麻酔科関与区分リスト情報を返す",
    output_color: "#000000",
  },
      {
    stored_name: "prc_list_common_ope_item_master",
    description: "共通項目情報を返す",
    output_color: "#000000",
  },
      {
    stored_name: "prc_entry_calculate_anesth_time_view",
    description: "XMLを返す。麻酔料の算定に必要な麻酔(硬膜外麻酔・脊椎麻酔)の実施時間の自動計算し取得する。",
    output_color: "#007acc",
  },
      {
    stored_name: "prc_entry_closed_circuit_refresh_data_view",
    description: "閉鎖循環式麻酔の最新情報を取得する",
    output_color: "#000000",
  },
      {
    stored_name: "prc_edit_role_list",
    description: "役割情報を登録する",
    output_color: "#000000",
  },
      {
    stored_name: "prc_entry_role_list_data",
    description: "本ストアド実行時のrole_list_tableデータを返す",
    output_color: "#a0a0a0",
  },
      {
    stored_name: "prc_entry_center_menu_transfer_ope_view",
    description: "指定された手術日の手術情報を返す",
    output_color: "#000000",
  },
      {
    stored_name: "prc_list_logon_staff_permission",
    description: "任意利用者の画面許諾区分情報を返す ",
    output_color: "#000000",
  },
      {
    stored_name: "prc_edit_update_right_lock_unregister_entry",
    description: "更新権情報を削除する",
    output_color: "#000000",
  },
        {
    stored_name: "prc_edit_eventcomm_data",
    description: 
    `手術画面だと際限なく溜まる。無視推奨。
    イベントコミュニケータ(EventComm)用のデータを取得する。`,
    output_color: "#000000",
  },
        {
    stored_name: "prc_entry_eventcomm_data",
    description: 
    `手術画面だと際限なく溜まる。無視推奨。
    イベントコミュニケータ(EventComm)用のデータを取得する。`,
    output_color: "#a0a0a0",
  },
        {
    stored_name: "prc_entry_ope_room_status_specify_view",
    description: 
    `手術画面だと際限なく溜まる。
    任意手術室の使用状況情報を返す`,
    output_color: "#a0a0a0",
  },
        {
    stored_name: "prc_entry_device_group_view",
    description:
    `手術画面だと際限なく溜まる。
    対象手術情報の接続機器情報を返す`,
    output_color: "#a0a0a0",
  },
        {
    stored_name: "prc_entry_operative_data",
    description: 
    `手術画面だと際限なく溜まる。
     術中情報を取得する`,
    output_color: "#a0a0a0",
  },
        {
    stored_name: "prc_edit_eventcomm_data",
    description: 
    `手術画面だと際限なく溜まる。無視推奨。
    イベントコミュニケータ(EventComm)用のデータを登録する。`,
    output_color: "#a0a0a0",
  },
        {
    stored_name: "[prc_entry_io_balance_input_view]",
    description: "IOバランス情報を返す",
    output_color: "#000000",
  },
          {
    stored_name: "prc_list_medi_set_master",
    description: 
    `薬剤追加ボタン押したときに出てくる。
     セット薬剤リスト情報を返す `,
    output_color: "#FFA500",
  },
          {
    stored_name: "prc_edit_update_right_lock_register_entry",
    description: "更新権取得チェックを行い更新権情報を登録する",
    output_color: "#000000",
  },
          {
    stored_name: "prc_list_medi_name_view",
    description: "薬剤選択画面表示用の薬剤情報を返す",
    output_color: "#FFA500",
  },
          {
    stored_name: "prc_list_medi_method_view",
    description: "薬剤詳細リスト（辞書機能）情報を返す",
    output_color: "#000000",
  },
          {
    stored_name: "prc_list_medi_dilution_composition_master",
    description: "薬剤詳細組成リスト（辞書機能）情報を返す",
    output_color: "#000000",
  },
          {
    stored_name: "prc_edit_operative_data",
    description: "記録系データ更新情報を登録する",
    output_color: "#000000",
  },
          {
    stored_name: "prc_entry_device_data",
    description: "任意手術の接続装置情報を取得する",
    output_color: "#000000",
  },
          {
    stored_name: "prc_entry_alert_data",
    description: "任意手術の接続装置毎のアラート情報を取得する",
    output_color: "#000000",
  },
{
    stored_name: "prc_edit_medi_total_entry",
    description: "対象手術情報の薬剤、輸液・輸血、排液投与合計量情報を更新する",
    output_color: "#FFA500",
  },

   
];
