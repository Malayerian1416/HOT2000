<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('house_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId("userId")->constrained('users')->onDelete("cascade");
            $table->foreignId("companyId")->constrained('companies')->onDelete("cascade");
            $table->string("fileId",25)->unique()->nullable();
            $table->string("clientFirstName")->nullable();
            $table->string("clientLastName")->nullable();
            $table->string("clientPhone")->nullable();
            $table->string("clientEmail")->nullable();
            $table->string("street")->nullable();
            $table->string("unit",5)->nullable();
            $table->string("city", 100)->nullable();
            $table->string("region", 50)->nullable();
            $table->string("postalCode", 10)->nullable();
            $table->boolean("pdfReady")->default(false);
            $table->boolean("h2kReady")->default(false);
            $table->boolean("imagesReady")->default(false);
            $table->text("notes")->nullable();
            $table->string("status",50)->default("created");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('house_files');
    }
};
