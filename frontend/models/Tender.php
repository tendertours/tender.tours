<?php

namespace frontend\models;

use Yii;
use \yii\db\ActiveRecord;
use \yii\web\IdentityInterface;
use \yii\behaviors\TimestampBehavior;


class Tender extends ActiveRecord //implements IdentityInterface
{
    
    public static function tableName()
    {
        return '{{%tender}}';
    } 
    
    public function rules()
    {
        return [
            [['HEADER', 'COUNTRY', 'CITY', 'DATE_FORWARD', 'DATE_BACK', 'STARS', 'TRANSPORT', 'FEED',  'BUDGET', 'PEOPLE_SUM'], 'required'],
        ];
    }

    public static function findIdentity($id)
    {
        return static::findOne(['ID' => $id]);
    }

    public static function findByUserId($useId)
    {
        return static::findOne(['USER_ID' => $useId]);
    }

    public function getId()
    {
        return $this->getPrimaryKey();
    }
}